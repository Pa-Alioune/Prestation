
module.exports = (sequelize, DataTypes) => {

    const Info = sequelize.define('Info', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull:false         
            // allowNull defaults to true
        }
      }, {

        // Other model options go here
      });

      return Info;
}

