import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Venue = sequelize.define('Venue', {
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
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    facilities: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true
});

Venue.sync()
    .then(() => {
        console.log('Venue table created');
    })
    .catch(err => {
        console.error('Error creating venue table:', err);
    });

export default Venue;
