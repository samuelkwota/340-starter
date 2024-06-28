// models/inventoryModel.js
const db = require('../database/connection');

exports.getVehiclesByClassification = async (classification) => {
    const query = 'SELECT * FROM inventory WHERE classification = $1';
    const result = await db.query(query, [classification]);
    return result.rows;
};

const vehicles = [
    {
        id: 1,
        make: 'Toyota',
        model: 'RAV4',
        year: 2020,
        price: 30000,
        mileage: 15000,
        description: 'A reliable and fuel-efficient SUV.',
        image: '/images/toyota-rav4.jpg',
        type: 'suv'
    },
    // More SUV data...
];

exports.getSuvData = () => {
    return vehicles.filter(vehicle => vehicle.type === 'suv');
};