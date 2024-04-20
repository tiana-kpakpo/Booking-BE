import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Event from "./event.js";

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true
})

// association
Category.belongsToMany(Event, { through: 'EventCategory' });
Event.belongsToMany(Category, { through: 'EventCategory' });

await Category.sync()
console.log('Category table created')

export default Category;