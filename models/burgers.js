

 module.exports = function(sequelize, DataTypes) {
 var Burger = sequelize.define("Burger", {
   title: {
     burger_name: DataTypes.STRING,
     devoured: false,
   }
 });
 return Burger;
};
