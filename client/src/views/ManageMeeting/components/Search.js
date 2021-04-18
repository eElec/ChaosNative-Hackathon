import React from 'react';

import Form from '@utils/components/Form';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';

const Search = () => {
	const [searchTerm, setTerm] = React.useState('');

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
