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


