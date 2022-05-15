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

//POST
router.post('/',async (req, res) => {
    await Database.open('../funday.sqlite')
        .then(async db => {
            const hashedPassword = await hashPassword(req.body.password);
            const sql = `INSERT INTO Admins(email, password) VALUES (?, ?)`;
            let result = await db.run(sql,[req.body.email, hashedPassword]);

            db.close();

            console.log(await verifyPassword(req.body.password, hashedPassword));

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
                res = false;
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