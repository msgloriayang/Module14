const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const defineAssociations = () => {
  const User = sequelize.define('user', {
    // User model definition
  });

  const Post = sequelize.define('post', {
    // Post model definition
  });

  const Comment = sequelize.define('comment', {
    // Comment model definition
  });

  User.hasMany(Post, {
    foreignKey: 'user_id',
  });

  User.hasMany(Comment, {
    foreignKey: 'user_id',
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

  Post.hasMany(Comment, {
    foreignKey: 'post_id',
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });

  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });

  return {
    User,
    Post,
    Comment,
  };
};

module.exports = defineAssociations;
