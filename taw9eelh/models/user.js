"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      full_name: DataTypes.STRING,
      mobile: DataTypes.STRING,
      login_name: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // User.hasMany(models.Request); // requestId
    // u.getRequests().then(function() {})
    
    // associations can be defined here
  };
  return User;
};
