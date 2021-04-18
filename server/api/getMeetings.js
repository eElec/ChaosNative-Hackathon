const router = require('express').Router();

const connection = require('../config/connection');

router.get('/', async (req, res)=>{
  const [result, ...rest] = await connection.query('SELECT * FROM meetings')
  res.send(result)
})

module.exports = router;