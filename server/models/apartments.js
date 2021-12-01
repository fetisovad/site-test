const sequelize = require('../utils/dbConnect')
const {DataTypes} = require('sequelize')

const Apartment = sequelize.define('Apartment', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, unique: true
    },
    floor: {
        type: DataTypes.STRING
    },
    pos_on_floor: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    rooms: {
        type: DataTypes.STRING
    },
    area_total: {
        type: DataTypes.STRING
    },
    area_kitchen: {
        type: DataTypes.STRING
    },
    area_live: {
        type: DataTypes.STRING
    },
    layout_image: {
        type: DataTypes.STRING
    }
})

module.exports = {
    Apartment
}