//@description  Logs request to console
//Setting up Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
    next(); //always need to call this when running Middleware
};

module.exports = logger;