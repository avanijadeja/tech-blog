// Dependencies.
// require express.
const router = require("express").Router();
// require user-routes.
const userRoutes = require("./user-routes.js");
// require post-routes
const postRoutes = require("./post-routes.js");
// require comment-routes
const commentRoutes = require("./comment-routes.js");

// set route /user for userRoutes
router.use("/user", userRoutes);
// set route /post for postRoutes
router.use("/post", postRoutes);
// set route /comment for commentRoutes
router.use("/comment", commentRoutes);

// export router
module.exports = router;
