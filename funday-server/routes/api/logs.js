const express = require('express');
const Database = require("sqlite-async");

const router = express.Router();

//get
router.get('/',async (req, res) => {
    await Database.open('../domstroy.sqlite')
        .then(async db => {
            const sql = `SELECT * FROM Logs`;
            let result = await db.all(sql, []);
            //console.log(result)

            db.close();

            res.send(result);
        })
        .catch(err => {
            if(err) {
                console.log(err.message);
                res.status(500);
                return false;
            }
        });
})

router.post('/', async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = `INSERT INTO Logs(adminId, logMsg) VALUES(?,?)`;
            let result = await db.run(sql,[req.body.adminId, req.body.logMsg]);

            db.close();

            res.status(201).send();
            res = true;
        })
        .catch(err => {
            if (err) {
                console.log(err.message)

                res.status(500).send();
                return false;
            }
        });
})

module.exports = router;