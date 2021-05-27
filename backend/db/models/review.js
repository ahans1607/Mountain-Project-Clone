'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      type:DataTypes.STRING,
      allowNull:false
    },
    userId:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    },
    spotId:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Spot, {foreignKey:"spotId"});
    Review.belongsTo(models.User, {foreignKey:"userId"});
  };
  return Review;
};