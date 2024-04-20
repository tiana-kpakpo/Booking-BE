import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Event from "./event.js";
import User from "./user.js";

const Booking = sequelize.define('Booking', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'canceled'),
        allowNull: false,
        defaultValue: 'pending'
    }

}, {
    timestamps: true
})

Booking.belongsTo(User)
Booking.belongsTo(Event)

await Booking.sync()
console.log('Booking Table created')

export  default Booking;