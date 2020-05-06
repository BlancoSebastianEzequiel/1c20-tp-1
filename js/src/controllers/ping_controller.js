const { OK } = require("http-status-codes");

module.exports.PingController = {
    ping: (request, response) => response.status(OK).json("ping")
};
