export const resetRows = () => ({
	type: 'RESET_ROWS',
});

export const changeRows = (data) => ({
	type: 'CHANGE_ROWS',
	data,
});

export const changeSearch = (data) => ({
	type: 'CHANGE_SEARCH',
	data,
});

export const changeFromDate = (data) => ({
  type: 'CHANGE_FROMDATE',
  data
})

export const changeToDate = (data) => ({
  type: 'CHANGE_TODATE',
  data
})