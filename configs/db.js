const sequelize = require("sequelize");
const config = require("../config.json")

const db = new sequelize(config.database.name, config.database.user, config.database.password, {
    host : config.database.host,
    dialect : "mysql",
})

try {
    db.authenticate()
    console.log(`Database connected`)
} catch (error) {
    console.log(`Error connecting to database: ${error}`)
}

module.exports = db;