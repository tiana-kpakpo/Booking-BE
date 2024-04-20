import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js"
import Event from "./event.js";

const Ticket = sequelize.define('Ticket', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    quantityAvailable: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: true
})

Ticket.belongsTo(Event)
Event.hasMany(Ticket)

await Ticket.sync(),
console.log('Ticket table created')

export default Ticket;