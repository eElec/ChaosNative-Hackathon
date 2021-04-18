import React from 'react';

import styles from './styles/ManageMeeting.module.css';

import Paper from '@utils/components/Paper';
import Filter from './components/Filter';
import Table from './components/Table';

const ManageMeeting = () => {
	return (
		<div className={styles.main}>
			<h1>My Meetings</h1>
			<Paper>
				<Filter />
			</Paper>
			<Paper style={{ height: '40%', padding: '2em 4em'}}>
				<Table />
			</Paper>
		</div>
	);
};

export default ManageMeeting;
