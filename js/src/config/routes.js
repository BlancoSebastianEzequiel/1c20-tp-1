const { Router } = require("express");
const { PingController } = require("../controllers/ping_controller");

module.exports = {
    addRoutes: (expressApp) => {
        const router = Router();
        expressApp.use('/ping', router.get("/", PingController.ping))
    }
};
