// module.exports = function(sequelize, DataTypes) {
//   var burgers = sequelize.define("burgers", {
//     burger_name: DataTypes.STRING,
//     devoured: DataTypes.BOOLEAN
//   });
//   return burgers;
// };

module.exports = function(sequelize, DataTypes) {
  
  let Burger = sequelize.define("burger", {
    
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN
    }
    
  });
  return Burger;
};