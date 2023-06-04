// main route file

// require express
const router = require("express").Router();

// require for api , home-routes, dashboard-routes
const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboard-routes.js");

// set routes / for homeRoutes
router.use("/", homeRoutes);

// set routes /api for apiRoutes
router.use("/api", apiRoutes);

// set routes /dashboard for dashboardRoutes
router.use("/dashboard", dashboardRoutes);

// export router
module.exports = router;
