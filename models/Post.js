// Setup Post model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Post extends Model {}

Post.init(
  {
    // Created columns with individual properties like allownull, primarykey, autoincrement,unqiue,validation etc.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postTitle: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
    postContent: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dateCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // Define reference table and column
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
// export Post model
module.exports = Post;
