import React from 'react';

import Form from '@utils/components/Form';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch } from 'actions/actions';

const Search = () => {
	const searchTerm = useSelector((state)=>state.searchTerm)

	const dispatch = useDispatch();
	const setTerm = (data) => dispatch(changeSearch(data))

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	return (
		<Form
			type='text'
			value={searchTerm}
			placeholder='Search'
			handleChange={handleChange}
			PreIcon={SearchIcon}
		/>
	);
};

export default Search;
