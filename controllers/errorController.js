// controllers/errorController.js
exports.triggerError = (req, res, next) => {
    const error = new Error('Intentional Server Error');
    error.status = 500;
    next(error);
};