module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING,
        unique: false
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    },{
        indexes:[
            {
              unique: false,
              fields:['title']
            }
           ]
    });
  
    return Tutorial;
  };
  