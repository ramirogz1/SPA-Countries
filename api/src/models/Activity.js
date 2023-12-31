const { DataTypes, Op } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      name: {
        type: DataTypes.STRING,
      },
      difficulty: {
        type: DataTypes.INTEGER,
         [Op.between]: [1, 5],
      },
      duration: {
        type: DataTypes.INTEGER,
         [Op.between]: [1, 90],
      },
      season: {
        type: DataTypes.ENUM,
        values: ["summer", "autumn", "winter", "spring"],
      },
    },
    { timestamps: false }
  );
};
