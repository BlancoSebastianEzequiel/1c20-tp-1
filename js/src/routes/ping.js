const { Router } = require('express');

const router = Router();
router.get('/ping', (req, res) => res.send(`node - ping - HOST: ${process.env.HOSTNAME}`));

module.exports = router;