const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const catalog = require('./routes/api/catalog.js');

app.use('/api/catalog', catalog);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// (async () => {
//     await Database.open('./funday.sqlite')
//         .then(async db => {
//             const sql = 'SELECT * FROM Admins';
//             let result = await db.all(sql, []);
//             console.log(result)
//
//             db.close();
//         });
// })();