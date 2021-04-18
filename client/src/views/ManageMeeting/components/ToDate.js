import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeToDate } from 'actions/actions';

import Form from '@utils/components/Form';
import { ReactComponent as Calendar } from '@assets/icons/calendar.svg';

const ToDate = () => {
	const toDate = useSelector((state) => state.toDate);

	const dispatch = useDispatch();
	const setToDate = (data) => dispatch(changeToDate(data));

	const handleChange = (e) => {
		setToDate(e.target.value);
	};

	return (
		<div>
			<Form
				value={toDate}
				type='date'
				placeholder='Search'
				handleChange={handleChange}
				label='To'
				PostIcon={Calendar}
			/>
		</div>
	);
};

export default ToDate;
