const sequelize = require('../config/db')

class Login{

    static async verify(login, password){
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
}

module.exports = Login;