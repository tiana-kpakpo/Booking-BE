import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Event from "./event.js";

const Tag = sequelize.define('Tag', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true
})

Tag.belongsToMany(Event, {through: 'EventTag'})

await Tag.sync();
console.log('Tag table created')

export default Tag;