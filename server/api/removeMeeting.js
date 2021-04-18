const router = require('express').Router();

const connection = require('../config/connection');

router.post('/', async (req, res) => {
	const { ID } = req.body;
	const Q_Delete = 'DELETE FROM meetings WHERE `ID`=?';
	const [result, ...rest] = await connection.query(Q_Delete, [ID]);
	res.send(result);
});

module.exports = router;
