const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const catalog = require('./routes/api/catalog.js');
app.use('/api/catalog', catalog);

const admins = require('./routes/api/admins.js');
app.use('/api/admins', admins);

const rents = require('./routes/api/rents.js');
app.use('/api/rents',rents);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));