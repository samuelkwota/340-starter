/* ****************************************
 * Middleware For Handling Errors
 * Wrap other function in this for 
 * General Error Handling
 **************************************** */
Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

// utilities/index.js
exports.buildVehicleDetailHTML = (vehicle) => {
    return `
        <div class="vehicle-detail">
            <h1>${vehicle.make} ${vehicle.model}</h1>
            <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" class="vehicle-image"/>
            <ul>
                <li>Make: ${vehicle.make}</li>
                <li>Model: ${vehicle.model}</li>
                <li>Year: ${vehicle.year}</li>
                <li>Price: $${vehicle.price.toLocaleString()}</li>
                <li>Mileage: ${vehicle.mileage.toLocaleString()}</li>
                <li>Description: ${vehicle.description}</li>
            </ul>
        </div>
    `;
};