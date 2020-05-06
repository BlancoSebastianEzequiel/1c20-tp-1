const PingRoute = require('./ping');
const TimeoutRoute = require('./timeout');
const HeavyRoute = require('./heavy');


module.exports = [PingRoute, TimeoutRoute, HeavyRoute];