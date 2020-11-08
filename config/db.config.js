module.exports = {
    HOST: "192.168.33.18",
    USER: "homestead",
    PASSWORD: "secret",
    DB: "node",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };