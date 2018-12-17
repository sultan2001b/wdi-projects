"use strict";
module.exports = (sequelize, DataTypes) => {
  const request = sequelize.define(
    "request",
    {
      from: DataTypes.STRING,
      to: DataTypes.STRING,
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
