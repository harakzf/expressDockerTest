var express = require('express');
var router = express.Router();
const pg = require('pg');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  const pool = pg.Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: 'postgres-test',
    // host: '172.17.0.2',
    // host: 'localhost',
    port: 5432
  });

  const query = { text: 'SELECT * FROM cars' };

  pool.connect(async (err, client) => {
    if (err) {
      console.log(err);
    } else {
      const resObj = await client.query(query);
      // console.log(resObj.rows);
      // console.log('DBアクセス成功。');
      res.render('index', { title: 'Express', datas: resObj.rows });
    }
  })



});

module.exports = router;
