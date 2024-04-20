import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Event from "./event.js";

const Location = sequelize.define('Location', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }

}, {
    timestamps: true
})

await Location.sync()
console.log('Location table created')

export default Location 