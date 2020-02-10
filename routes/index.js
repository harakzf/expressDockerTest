var express = require('express');
const config = require('config');
var router = express.Router();
const pg = require('pg');
const Sequelize = require('sequelize');
// const sequel = new Sequelize(config.postgres.database, config.postgres.username, config.postgres.password, {dialect: 'postgres', pool: config.postgres.pool, logging: config.postgres.logging});
const sequel = new Sequelize('postgres://postgres:postgres@postgresql/postgres', {logging: false});
const carModel = sequel.import('../models/cars.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const resObj = await carModel.findAll(); // DB検索
  res.render('index', { title: 'Express', datas: resObj }); // レスポンス
});

module.exports = router;
