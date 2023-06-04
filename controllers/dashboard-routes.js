// require express.
const router = require("express").Router();
// require Model Post and User.
const { Post, User } = require("../models/");
// require auth.
const withAuth = require("../utils/auth");

// for user Dashboard, post all user post.
router.get("/", withAuth, async (req, res) => {
  try {
    // for particular userId find all posts.
    const postData = await Post.findAll({
      where: { userId: req.session.userId },
      include: [User],
    });
    // using map methed get all post.
    const posts = postData.map((post) => post.get({ plain: true }));
    // render to allPosts handlbar main layout is dashboard means dashboard handlebars body is replace woth allPosts handlebars.
    res.render("allPosts", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    // if error then redirect to login page
    res.redirect("login");
  }
});

// for /new render to newPost handlebar main layout is dashboard.menas dashboard handlebars body is replace with newPost handlebars.
router.get("/new", withAuth, (req, res) => {
  res.render("newPost", {
    layout: "dashboard",
  });
});

// for particular postid, edit post
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    // for paticular post - req.params.id
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      // render to editPost handlerbars.
      res.render("editPost", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    // else redirect to login page
    res.redirect("login");
  }
});
// export router.
module.exports = router;
