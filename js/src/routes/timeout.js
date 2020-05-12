const { Router } = require('express');

const SECOND = 1000;
const DEFAULT_TIMEOUT = 5 * SECOND;

const router = Router();
router.get('/timeout', (req, res) => {
    const time = (req.query.t && req.query.t * SECOND) || DEFAULT_TIMEOUT;
    setTimeout(() => res.send(`node - timeout: ${time}`), time);
});

module.exports = router;