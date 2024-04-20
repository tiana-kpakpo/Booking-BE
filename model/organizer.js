import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Organizer = sequelize.define('Organizer', {
    organizerId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    gender: {
        type: DataTypes.STRING,
        values: ['male', 'female', 'others'],
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },

    address: {
        type: DataTypes.STRING,
        values: [''],
        allowNull: false

    },

    contact: {
        type: DataTypes.STRING,
        values: [''],
        allowNull: false
    },

    website: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true 
        }
    },

    rating: {
        type: DataTypes.FLOAT,
        allowNull: true
      }, 

      followers: {
        type: DataTypes.NUMBER,
      }


}, {
    timestamps: true
})

await Organizer.sync();
console.log('the table for the user modle was just created')

export default Organizer;