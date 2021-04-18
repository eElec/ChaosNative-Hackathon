import Axios from 'axios';

const server = 'http://localhost:8080/api';

export const getMeetings = (searchTerm, fromDate, toDate) => {
	return Axios({
		method: 'GET',
		url: `${server}/getMeetings`,
		params: {
			searchTerm,
			fromDate,
			toDate
		},
	});
};

export const addMeeting = (name, member, startTime, endTime) => {
	return Axios({
		method: 'POST',
		url: `${server}/addMeeting`,
		data: {
			name,
			member,
			startTime,
			endTime,
		},
	});
};

export const removeMeeting = (ID) => {
	return Axios({
		method: 'POST',
		url: `${server}/removeMeeting`,
		data: {
			ID,
		},
	});
};
