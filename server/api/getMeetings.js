const router = require('express').Router();

const connection = require('../config/connection');

router.get('/', async (req, res)=>{
  const Q_Select = 'SELECT * FROM meetings' 
  const [result, ...rest] = await connection.query(Q_Select)
  res.send(result)
})

module.exports = router;