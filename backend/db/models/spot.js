'use strict';

const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    grade: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, {foreignKey: "userId"})
  };
  return Spot;
};