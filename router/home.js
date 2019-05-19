const express = require('express');
const router = express.Router();

// 인덱스
router.get('/', function(req, res) {
  res.render('index', {});
});


module.exports = router;