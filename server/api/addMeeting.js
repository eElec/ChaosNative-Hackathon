const router = require('express').Router();

const connection = require('../config/connection');

router.post('/', async (req, res) => {
	const { name, member, startTime, endTime } = req.body;
	let sTime = new Date(startTime);
	let eTime = new Date(endTime);

	const Q_Insert = `INSERT INTO meetings (Name, Members, StartTime, EndTime) values(?, ?, ?, ?)`;
	const [results, ...rest] = await connection.query(Q_Insert, [
		name,
		member,
		sTime,
		eTime,
	]);
	res.send(results);
});

module.exports = router;
