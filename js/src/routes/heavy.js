const { Router } = require('express');

const SECOND = 1000;
const DEFAULT_TIMEOUT = 5 * SECOND;

const router = Router();
router.get('/heavy', (req, res) => {
    const time = (req.query.t && req.query.t * SECOND) || DEFAULT_TIMEOUT;
    const start = new Date();

    for (;;) {
        let now = new Date();
        if (now - start >= time) break;
    }

    res.send(`node - heavy: ${time} - HOST: ${process.env.HOSTNAME}`);
})

module.exports = router;