const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Relationships between models using sequelize
User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});

Comment.belongsTo(Post, {
  foreignKey: "postId",
});

// export models
module.exports = {
  User,
  Comment,
  Post,
};
