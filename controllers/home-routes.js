// dependenices
// require express
const router = require("express").Router();
// require Post,Comment, User models
const { Post, Comment, User } = require("../models/");
// require auth helper function
const withAuth = require("../utils/auth");

// get all posts for homepage.
router.get("/", async (req, res) => {
  try {
    // get all data of Post model including User model.
    const postData = await Post.findAll({
      include: [User],
    });
    // get data using map method.
    const posts = postData.map((post) => post.get({ plain: true }));
    // render to allPostsUser handlerbar
    res.render("allPostsUser", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// For particular post
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      // get the data for particular post id which passed in paramater like res.params.id
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    // if postData has value get data
    if (postData) {
      const post = postData.get({ plain: true });
      //render to postData handlebars
      res.render("postData", { post, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// for login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    // if user login redirect to user dashboard
    res.redirect("/dashboard");
    return;
  }
  //else user login form
  res.render("login");
});

// for signup
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    // if user login redirect to user dashboard
    res.redirect("/dashboard");
    return;
  }
  // else render signup form
  res.render("signup");
});

// exports router
module.exports = router;
