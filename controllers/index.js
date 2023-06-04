// main route file

// require express
const router = require("express").Router();

// require for api , home-routes
const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api");

// set routes / for homeRoutes
router.use("/", homeRoutes);

// set routes /api for apiRoutes
router.use("/api", apiRoutes);

module.exports = router;
