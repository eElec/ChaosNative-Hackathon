import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFromDate } from 'actions/actions';

import Form from '@utils/components/Form';
import { ReactComponent as Calendar } from '@assets/icons/calendar.svg';

const FromDate = () => {
	const fromDate = useSelector((state) => state.fromDate);

	const dispatch = useDispatch();
	const setFromDate = (data) => dispatch(changeFromDate(data));

	const handleChange = (e) => {
		setFromDate(e.target.value);
	};

	return (
		<div>
			<Form
				value={fromDate}
				type='date'
				placeholder='Search'
				handleChange={handleChange}
				label='From'
				PostIcon={Calendar}
			/>
		</div>
	);
};

export default FromDate;
