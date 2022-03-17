const Sequelize=require('sequelize');

const database=new Sequelize(
    "maxab", // database name
    "postgres", // database user
    "0831", // database password
    {
        host: "localhost", // host
        dialect: "postgres", // postgres
    }
);

database.sync();

module.exports = database