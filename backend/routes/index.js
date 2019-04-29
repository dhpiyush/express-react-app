var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) =>res.send('hello'));
router.get('/test', (req, res) =>res.send('test'));

module.exports = router;
