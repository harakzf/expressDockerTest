module.exports = function(sequelize, DataTypes) {
    const cars = sequelize.define('cars', {
      name: {
        type: DataTypes.CHAR,
        allowNull: false,
        primaryKey: true
      },
      maker: {
        type: DataTypes.CHAR,
        allowNull: false
      }
    }, {
      freezeTableName: true,
      timestamps: false,
      tableName: 'cars'
    });
  
    return cars;
  };
  