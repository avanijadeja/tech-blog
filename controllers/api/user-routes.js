// Dependencies.
// require express.
const router = require("express").Router();
// require User model.
const { User } = require("../../models");

// for Signup.
router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      userName: req.body.userName,
      password: req.body.password,
    });
    // Save user information for session
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.userName = newUser.userName;
      req.session.loggedIn = true;
      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// For Login.
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }
    // check password validation
    const validPassword = user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }
    // save user information for session.
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.userName = user.userName;
      req.session.loggedIn = true;
      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account found!" });
  }
});

// Logout.
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// export router.
module.exports = router;
