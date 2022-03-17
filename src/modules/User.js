// import sequalize
const Sequelize = require('sequelize')
// import db connection
const db=require('../db/connect')

const Users=db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    address:Sequelize.STRING,
    phone:Sequelize.BIGINT
})

module.exports = Users