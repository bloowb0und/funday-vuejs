const express = require('express');
const Database = require("sqlite-async");

const router = express.Router();

//get
router.get('/',async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            //const sql = 'SELECT title,desc,image FROM Projects';
            const sql = `SELECT * FROM Rents`;
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

//post
router.post('/', async(req,res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = `INSERT INTO Rents(name,surname,phone) VALUES(?,?,?)`;
            let result = await db.run(sql,[req.body.name,req.body.surname, req.body.phone]);

            console.log(result)
            db.close();

            res.status(201).send();
            res = true;
        })
        .catch((e) => {
            if(e)
            {
                console.log(e.message);
                res = false
                res.status(500).send();
                return false;
            }
        })
})

//delete
router.delete('/:id', async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = 'DELETE FROM Projects WHERE id = (?)';
            let result = await db.run(sql, [req.params.id]);

            db.close();

            res.status(201).send();
            res = true;
        })
        .catch(err => {
            if (err) {
                console.log(err.message)
                res = false;
                res.status(500).send();
                return false;
            }
        });
})

module.exports = router;