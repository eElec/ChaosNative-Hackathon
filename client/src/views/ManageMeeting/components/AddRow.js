import { addMeeting } from '@services/services';
import Form from '@utils/components/Form';
import { parseDateFromInput, parseTimeFromInput } from '@utils/dateToStr';
import { resetRows } from 'actions/actions';
import React from 'react';
import { useDispatch } from 'react-redux';

const AddRow = () => {
	const [name, setName] = React.useState('');
	const [members, setMembers] = React.useState();
	const [date, setDate] = React.useState('');
	const [startTime, setStartTime] = React.useState('');
	const [endTime, setEndTime] = React.useState('');

	const dispatch = useDispatch();
	const resetRow = () => dispatch(resetRows());

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleMemberChange = (e) => {
		setMembers(e.target.value);
	};
	const handleDateChange = (e) => {
		setDate(e.target.value);
	};
	const handleStartChange = (e) => {
		setStartTime(e.target.value);
	};
	const handleEndChange = (e) => {
		setEndTime(e.target.value);
	};

	const handleAdd = () => {
		if (
			name === '' &&
			date === '' &&
			startTime === '' &&
			endTime === '' &&
			members === undefined
		)
			return;
		let dateParsed = parseDateFromInput(date);
		if (dateParsed.getFullYear < 1900) {
			console.info('Year can not be before 1900');
			return;
		}

		let sTime = parseTimeFromInput(dateParsed, startTime);
		let eTime = parseTimeFromInput(dateParsed, endTime);

		console.log(sTime, eTime)
		addMeeting(name, members, sTime, eTime).then((resp) => {
			resetRow();
		});
	};

	return (
		<tr>
			<td></td>
			<td>
				<Form value={name} handleChange={handleNameChange} />
			</td>
			<td>
				<Form value={members} handleChange={handleMemberChange} width={1} />
			</td>
			<td>
				<Form value={date} handleChange={handleDateChange} type='date' />
			</td>
			<td>
				<Form value={startTime} handleChange={handleStartChange} type='time' />
			</td>
			<td>
				<Form value={endTime} handleChange={handleEndChange} type='time' />
			</td>
			<td>
				<button onClick={handleAdd}>Add</button>
			</td>
		</tr>
	);
};

export default AddRow;
