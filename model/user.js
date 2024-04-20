import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define('User', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
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
    }

},{
    timestamps:true
})

await User.sync();
console.log('the table for the user modle was just created')

export default User;