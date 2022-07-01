
module.exports = (sequelize, DataTypes) => {

    const Image = sequelize.define('Image', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
          type: DataTypes.TEXT,
          allowNull:false
          // allowNull defaults to true
        }

      }, {

        // Other model options go here
      });

      return Image;
}

