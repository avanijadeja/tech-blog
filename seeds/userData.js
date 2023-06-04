// User model seeds file 
const { User } = require("../models");

const userdata = [
  {
    userName: "Avani",
    password: "avanijadeja",
  },
  {
    userName: "Parixit",
    password: "parixitparmar",
  },
  {
    userName: "Kayra",
    password: "kayraparmar",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

//   export seedUser
module.exports = seedUser;