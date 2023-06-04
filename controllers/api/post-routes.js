// require express
const router = require("express").Router();
// reqire Post model
const { Post } = require("../../models/");
// require auth
const withAuth = require("../../utils/auth");

// For create new Post
router.post("/", withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    console.log("IT FAILED!", err);
    res.status(500).json(err);
  }
});

// For update particular post
router.put("/:id", withAuth, async (req, res) => {
  try {
    // fetch all updated postdata for particular post id
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // if no data updated then error
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// for delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    // delete post for particular post id - req.parmas.id
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    // if no data then error
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// export router
module.exports = router;
