import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Event from "./event.js"; 

const Gallery = sequelize.define('Gallery', {
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    caption: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true
});

// association with Event
Gallery.belongsTo(Event); // 

Gallery.sync()
    .then(() => {
        console.log('Gallery table created');
    })
    .catch(err => {
        console.error('Error creating gallery table:', err);
    });

export default Gallery;
