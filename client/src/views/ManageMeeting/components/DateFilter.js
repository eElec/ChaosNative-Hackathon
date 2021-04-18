import React from 'react';

import Form from '@utils/components/Form';
import { ReactComponent as Calendar } from '@assets/icons/calendar.svg';

const DateFilter = ({ label }) => {
	const [filterDate, setDate] = React.useState('');

	const handleChange = (e) => {
		setDate(e.target.value);
	};

	return (
		<div>
			<Form
				value={filterDate}
				placeholder='Search'
				onChange={handleChange}
				label={label}
				PostIcon={Calendar}
			/>
		</div>
	);
};

export default DateFilter;
