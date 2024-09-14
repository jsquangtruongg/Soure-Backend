const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("store", "root", "Truong2003@", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    connectTimeout: 60000,
  },
});

const connectionDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectionDatabase();
