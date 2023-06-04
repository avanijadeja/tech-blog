// Dependencies.
// require express.
const router = require("express").Router();
// require user-routes.
const userRoutes = require("./user-routes.js");
// route  /user for userRoutes
router.use("/user", userRoutes);
// export router
module.exports = router;
