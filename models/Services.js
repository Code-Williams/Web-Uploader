const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Services = db.define("services", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    file : {
        type : DataTypes.STRING,
    },

    userId : {
        type : DataTypes.STRING,
    },

    fileName :{
        type : DataTypes.STRING,
    }
}, {
    timestamps : false
})

module.exports = Services