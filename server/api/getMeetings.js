const router = require('express').Router();

const connection = require('../config/connection');

router.get('/', async (req, res) => {
	const { searchTerm, fromDate, toDate } = req.query;
	let Q_Select;

	let search = searchTerm || '';
	let from = fromDate || '1900-01-01';
	let to = toDate || '2100-01-01';
	try {
		Q_Select =
			'SELECT * FROM meetings WHERE `Name` LIKE ? AND `StartTime` > ? AND `StartTime` < ?';
		const [results, ...rest] = await connection.query(Q_Select, [
			search + '%',
			from,
			to,
		]);
		return res.status(200).json(results);
	}
	catch(err){
		return res.status(500).json({message: err})
	}
});

module.exports = router;
