const { Router } = require('express');

const router = Router();
router.get('/ping', (req, res) => res.send('ping'));

module.exports = router;