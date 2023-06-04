// require config for database and model
const sequelize = require("../config/config");
// require userData
const seedUser = require("./userData");
// require postData
const seedPost = require("./postData");

// add seed in model
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();
