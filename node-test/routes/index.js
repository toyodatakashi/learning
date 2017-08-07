var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日 %k時%i分%s秒\') AS created_at FROM boards';
  connection.query(query, function(err, rows) {
    res.render('index', {
      title: 'はじめてのNode.js',
      boardList: rows
    });
  });
});

module.exports = router;
