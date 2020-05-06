const express = require('express');
const routes = require('./routes')

const port = process.env.PORT || 5000;
const app = express();
app.use(routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
