const express = require('express');
const Database = require("sqlite-async");
const bcrypt = require("bcrypt");

const router = express.Router();

//GET
router.get('/',async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = `SELECT * FROM Admins`;
            let result = await db.all(sql,[]);

            db.close();

            res.send(result);
        })
        .catch((e) => {
            if(e)
            {
                console.log(e.message);

                res.status(500);
                return false;
            }
        })
})

router.get('/:id',async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = `SELECT * FROM Admins WHERE id = (?)`;
            let result = await db.all(sql,[req.params.id]);

            db.close();

            res.send(result);
        })
        .catch((e) => {
            if(e)
            {
                console.log(e.message);
                res.status(500);
                return false;
            }
        })
})

//POST
router.post('/',async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const hashedPassword = await hashPassword(req.body.password);
            const sql = `INSERT INTO Admins(email, password, status) VALUES (?, ?, ?)`;
            let result = await db.run(sql,[req.body.email, hashedPassword, req.body.status]);

            db.close();

            console.log(await verifyPassword(req.body.password, hashedPassword));

            res.status(201).send();
            res = true;
        })
        .catch((e) => {
            if(e)
            {
                console.log(e.message);

                res.status(500).send();
                return false;
            }
        });
})

router.post('/getAdmin',async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = `SELECT * FROM Admins WHERE email = (?)`;
            let result = await db.all(sql,[req.body.email]);

            db.close();

            res.send(result);
        })
        .catch((e) => {
            if(e)
            {
                console.log(e.message);
                res.status(500);
                return false;
            }
        })
})

router.post('/authorize',async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = `SELECT * FROM Admins WHERE email = (?)`;
            let result = await db.all(sql, [req.body.email]);

            db.close();

            if(result.length < 1) {
                res.status(401).send();
            }

            const verif = await verifyPassword(req.body.password, result[0].password);

            if(!verif) {
                res.status(401).send();
            }

            res.status(200).send();
        })
        .catch((e) => {
            if(e)
            {
                console.log(e.message);

                res.status(500).send();
                return false;
            }
        });
});

//DELETE
router.delete('/:id', async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const sql = `DELETE FROM Admins WHERE id = (?)`;
            let result = await db.run(sql, [req.params.id]);

            db.close();

            res.status(201).send();
            res = true;
        })
        .catch((e) => {
            if (e) {
                console.log(e.message);
                res.status(500).send();
                return false;
            }
        });
})

//hash
async function hashPassword(originalPassword) {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        return hashPassword = await bcrypt.hash(originalPassword, salt);
    }
    catch (e)
    {
        console.log(e.message);
    }
}

async function verifyPassword(password,hashPassword) {
    return await bcrypt.compare(password,hashPassword);
}

module.exports = router;