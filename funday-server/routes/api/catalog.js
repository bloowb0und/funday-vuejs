const express = require('express');
const Database = require("sqlite-async");
const bcrypt = require('bcrypt');
const {hash} = require("bcrypt");

const router = express.Router();

//get
router.get('/',async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            //const sql = 'SELECT title,desc,image FROM Projects';
            const sql = `SELECT * FROM Projects`;
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

router.get('/:id', async(req,res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = 'SELECT id,title, desc, image, location, year, places, floors FROM Projects WHERE id = ' + req.params.id;
            let result = await db.all(sql,[]);

            console.log(result)
            db.close();

            res.send(result);
        })
        .catch(err => {
            if(err){
                console.log(err.message);
                res.status(500);
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

            res.status(200).send();
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
router.put('/:id', async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = 'UPDATE Projects SET title = (?), desc = (?), image = (?), location = (?), year = (?), places = (?), floors = (?) WHERE id = (?)';
            let result = await db.run(sql, [req.body.title,req.body.desc, req.body.image, req.body.location, req.body.year, req.body.places, req.body.floors, req.params.id]);

            db.close();

            res.status(200).send();
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

router.post('/', async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = `INSERT INTO Projects(title,desc,image, location, year, places, floors) VALUES(?,?,?,?,?,?,?)`;
            let result = await db.run(sql,[req.body.title,req.body.desc, req.body.image, req.body.location, req.body.year, req.body.places, req.body.floors]);

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