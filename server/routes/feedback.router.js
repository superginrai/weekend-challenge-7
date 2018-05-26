const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('feedback post');
    const feedback = req.body;
    console.log(feedback);
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [feedback[0], feedback[1], feedback[2], feedback[3]])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('SQL POST error:', error);
            res.sendStatus(500);
        });
});


module.exports = router;