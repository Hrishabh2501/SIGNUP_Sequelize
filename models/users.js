'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    userName: DataTypes.STRING,
    userEmail:{type:DataTypes.STRING,validate:{isEmail:{arg:true,msg:"Enter valid ID"}}},
    userPass: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};