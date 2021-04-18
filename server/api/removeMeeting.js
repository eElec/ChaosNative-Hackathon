const router = require('express').Router();

const connection = require('../config/connection');

router.post('/', async (req, res) => {
	const { ID } = req.body;
	if (ID === undefined) return res.status(400).json({ message: 'Invalid ID' });
	try {
		const Q_Delete = 'DELETE FROM meetings WHERE `ID`=?';
		const [result, ...rest] = await connection.query(Q_Delete, [ID]);
	}
	catch(err){
		res.status(500).json({ message: err });
	}
	res.status(200).json({ message: 'Removed meeting' });
});

module.exports = router;
