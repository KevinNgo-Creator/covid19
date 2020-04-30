module.exports = function(sequelize, DataTypes) {
    var Places = sequelize.define("tripchoice", {
      name: DataTypes.STRING,
      ruralurban: DataTypes.STRING,
      terrain: DataTypes.STRING,
      people: DataTypes.STRING,
      effort: DataTypes.STRING,
      expensive: DataTypes.STRING,
      latitude: DataTypes.DECIMAL,
      longitude: DataTypes.DECIMAL
    });
    return Places;
  };