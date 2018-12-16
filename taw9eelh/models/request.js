"use strict";
module.exports = (sequelize, DataTypes) => {
  const request = sequelize.define(
    "request",
    {
      start: DataTypes.STRING,
      end: DataTypes.STRING,
      by: DataTypes.STRING,
      type: DataTypes.STRING,
      date: DataTypes.DATE,
      userId: DataTypes.INTEGER
    },
    {}
  );
  request.associate = function(models) {
    // associations can be defined here
  };
  return request;
};
