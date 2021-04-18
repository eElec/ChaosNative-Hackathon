import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dateToStr, timeToStr } from '@utils/dateToStr';
import { getMeetings, addMeeting, removeMeeting } from '@services/services';
import { changeRows } from 'actions/actions';

import styles from '../styles/Table.module.css';
import { ReactComponent as Delete } from '@assets/icons/delete.svg';

import AddRow from './AddRow';

const Table = () => {
	const dispatch = useDispatch();
	const meetings = useSelector((state) => state.meetings);
	const searchTerm = useSelector((state) => state.searchTerm);
	const fromDate = useSelector((state) => state.fromDate);
	const toDate = useSelector((state) => state.toDate);
	const setMeetings = (data) => dispatch(changeRows(data));

	React.useEffect(() => {
		fetchMeetings(searchTerm, fromDate, toDate);
	}, [searchTerm, fromDate, toDate]);

	const fetchMeetings = (searchTerm, fromDate, toDate) => {
		getMeetings(searchTerm, fromDate, toDate).then((resp) => {
			setMeetings(resp.data);
		});
	};

	const handleDelete = (ID) => {
		removeMeeting(ID).then((resp) => {
			fetchMeetings();
		});
	};

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
								<td>{idx + 1}</td>
								<td>{Name}</td>
								<td>{Members}</td>
								<td>{dateToStr(mDate)}</td>
								<td>{timeToStr(sTime)}</td>
								<td>{timeToStr(eTime)}</td>
								<td onClick={(e) => handleDelete(data.ID)} style={{cursor: 'pointer'}}>
									<Delete />
								</td>
							</tr>
						);
					})}
					{/* Add Meeting */}
					<AddRow fetchMeetings={fetchMeetings}/>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
