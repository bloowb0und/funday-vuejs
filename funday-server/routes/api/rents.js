const express = require('express');
const Database = require("sqlite-async");

const router = express.Router();

//get
router.get('/',async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            //const sql = 'SELECT title,desc,image FROM Projects';
            const sql = `SELECT Rents.fullname,, Rents.phone, Rents.date Projects.title FROM Rents INNER JOIN Projects on Rents.project_id = Projects.id`;
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
            var currentdate = new Date();
            var datetime = currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "."
                + currentdate.getFullYear() + " . "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
            const sql = `INSERT INTO Rents(fullname, phone,project_id, date) VALUES(?,?,?,?)`;
            let result = await db.run(sql,[req.body.fullname, req.body.phone, req.body.project_id, datetime]);

            console.log(result);
            console.log(req.body.project_id);
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
            const sql = 'DELETE FROM Rents WHERE id = (?)';
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