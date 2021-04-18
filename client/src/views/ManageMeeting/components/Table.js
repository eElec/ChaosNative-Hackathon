import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMeetings } from '@services/services';
import { changeRows } from 'actions/actions';

import styles from '../styles/Table.module.css';
import { dateToStr, timeToStr } from '@utils/dateToStr';

const Table = () => {
	const dispatch = useDispatch();
	const meetings = useSelector((state) => state.meetings);
	const setMeetings = (data) => dispatch(changeRows(data));

	const fetchMeetings = () => {
		getMeetings().then((resp) => {
			setMeetings(resp.data);
		});
	};

	React.useEffect(() => {
		fetchMeetings();
	}, []);

	return (
		<div className={styles.table}>
			<table>
				<thead>
					<tr>
						<th>Sl. No</th>
						<th>Meeting Name</th>
						<th>No of People attending</th>
						<th>Date</th>
						<th>Start Time</th>
						<th>End Time</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{meetings.map((data, idx) => {
						const { ID, Name, Members, StartTime, EndTime } = data;
            
						let mDate = new Date(StartTime);
						let sTime = new Date(StartTime);
						let eTime = new Date(EndTime);

						return (
							<tr key={ID}>
								<td>{idx}</td>
								<td>{Name}</td>
								<td>{Members}</td>
								<td>{dateToStr(mDate)}</td>
								<td>{timeToStr(sTime)}</td>
								<td>{timeToStr(eTime)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
