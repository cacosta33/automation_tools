var winston = require('winston');
var logger = new (winston.Logger) ({
	transports: [
		new (winston.transports.File)({level: 'info', filename: __dirname+'/logs/visits.log', timestamp: true}),
		new (winston.transports.Console)
	]
});

module.exports = function(app) {
  app.get('/', function(req, res) {
    logger.info("ip_address: "+req.ip);
    delete logger;
    res.redirect('/about');
  });
};