const Database = require("sqlite-async");

(async () => {
    await Database.open('./funday.sqlite')
        .then(async db => {
            const sql = 'SELECT * FROM Admins';
            let result = await db.all(sql, []);
            console.log(result)

            db.close();
        });
})();