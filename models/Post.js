const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
  }
);

module.exports = Post;
