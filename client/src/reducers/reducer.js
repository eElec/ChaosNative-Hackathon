const initialValues = {
	meetings: [],
	searchTerm: '',
	fromDate: '',
	toDate: '',
};

const mainReducer = (state = initialValues, action) => {
	switch (action.type) {
		case 'RESET_ROWS':
			return {
				...state,
				meetings: [],
			};
		case 'CHANGE_ROWS':
			return {
				...state,
				meetings: [...action.data],
			};
		case 'CHANGE_SEARCH':
			return {
				...state,
				searchTerm: action.data,
			};
		case 'CHANGE_FROMDATE':
			return {
				...state,
				fromDate: action.data,
			};
		case 'CHANGE_TODATE':
			return {
				...state,
				toDate: action.data,
			};
		default:
			return state;
	}
};

export default mainReducer