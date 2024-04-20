import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Organizer from "./organizer.js";

const Event = sequelize.define('Event', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false
    }, 

    location: {
        type: DataTypes.STRING,
        allowNull: true
    },

    flyerURL: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    timestamps: true
})

Event.belongsTo(Organizer);

await Event.sync();
console.log('Event table created')

export default Event;