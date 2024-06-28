// controllers/inventoryController.js
const inventoryModel = require('../models/inventoryModel');
const { buildVehicleDetailHTML } = require('../utilities/index');

exports.getHome = async (req, res, next) => {
    try {
        const vehicles = await inventoryModel.getVehiclesByClassification('Home');
        const vehicleListHTML = vehicles.map(buildVehicleDetailHTML).join('');
        res.render('inventory/classification', {
            title: 'Home Vehicles',
            content: vehicleListHTML
        });
    } catch (error) {
        next(error);
    }
};

exports.getCustom = async (req, res, next) => {
    try {
        const vehicles = await inventoryModel.getVehiclesByClassification('Custom');
        const vehicleListHTML = vehicles.map(buildVehicleDetailHTML).join('');
        res.render('inventory/classification', {
            title: 'Custom Vehicles',
            content: vehicleListHTML
        });
    } catch (error) {
        next(error);
    }
};

exports.getSedan = async (req, res, next) => {
    try {
        const vehicles = await inventoryModel.getVehiclesByClassification('Sedan');
        const vehicleListHTML = vehicles.map(buildVehicleDetailHTML).join('');
        res.render('inventory/classification', {
            title: 'Sedans',
            content: vehicleListHTML
        });
    } catch (error) {
        next(error);
    }
};

exports.getSuv = async (req, res, next) => {
    try {
        const vehicles = await inventoryModel.getVehiclesByClassification('SUV');
        const vehicleListHTML = vehicles.map(buildVehicleDetailHTML).join('');
        res.render('inventory/classification', {
            title: 'SUVs',
            content: vehicleListHTML
        });
    } catch (error) {
        next(error);
    }
};

exports.getTruck = async (req, res, next) => {
    try {
        const vehicles = await inventoryModel.getVehiclesByClassification('Truck');
        const vehicleListHTML = vehicles.map(buildVehicleDetailHTML).join('');
        res.render('inventory/classification', {
            title: 'Trucks',
            content: vehicleListHTML
        });
    } catch (error) {
        next(error);
    }
};