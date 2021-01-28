'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Post;
};
