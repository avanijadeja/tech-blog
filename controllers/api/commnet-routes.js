// require express for router.
const router = require("express").Router();
// Comment model.
const { Comment } = require("../../models/");
//  withAuth helper function.
const withAuth = require("../../utils/auth");

// for "/" - get all comments data including user model.
router.get("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [User],
    });
    // take comments data using map method.
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    // render - postData handler
    res.render("postData", { comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// for "/" - if user login user post commnets.
router.post("/", withAuth, async (req, res) => {
  const body = req.body;
  // using spread opertor replace body with user comment data.
  try {
    const newComment = await Comment.create({
      ...body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// export router
module.exports = router;
