import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Event from "./event.js";
import User from "./user.js";

const Review = sequelize.define('Review', {
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    }

}, {
    timestamps: true
})

Review.belongsTo(User)
Review.belongsTo(Event)


await Review.sync(),
console.log('Review table created')

export default Review;