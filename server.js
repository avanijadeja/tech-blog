// Dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

// Import the custom helper methods
const helpers = require("./utils/helpers");

const sequelize = require("./config/config");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Set up sessions with cookies
const sess = {
  secret: "Tech blog avani secret",
  // Stored in milliseconds
  cookie: { maxAge: 24 * 60 * 60 * 1000 }, // expires after 1 day
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Setup the routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});

