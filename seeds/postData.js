// Post model seed file
const { Post } = require("../models");

const postdata = [
  {
    postTitle: "Life is Good",
    postContent: "Enjoy each day in life",
    userId: 1,
  },
  {
    postTitle: "Chocolates",
    postContent: "I love to eat chocolates everyday",
    userId: 2,
  },
  {
    postTitle: "Learn Alphabets",
    postContent: "Everyday I love to learn alphabets",
    userId: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

// export seedPost
module.exports = seedPost;
