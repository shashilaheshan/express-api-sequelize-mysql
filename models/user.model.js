module.exports = (sequelize, Sequelize)=>{
    const User = sequelize.define("user", {
        title: {
          type: Sequelize.STRING,
          unique: false
        },
        number: {
          type: Sequelize.INTEGER
        },
      },{
          indexes:[
              {
                unique: false,
                fields:['title']
              }
             ]
      });
    
      return User;
    };