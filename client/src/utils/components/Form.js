import React from 'react';

import styles from '@assets/css/Form.module.css';

const Form = ({
	placeholder,
	handleChange,
	value,
	label,
	PreIcon,
	PostIcon,
	width,
	type
}) => {
	return (
		<div className={styles.form}>
			{label ? <span className={styles.label}>{label}: </span> : <></>}
			{PreIcon ? <PreIcon className={styles.preIcon} /> : <></>}
			<input
				style={{ width: `${width}ch` }}
				type={type?type:'text'}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
			/>
			{/* Icons for date and time values are not available in Firefox */}
			{PostIcon ? <PostIcon className={styles.postIcon} /> : <></>}
		</div>
	);
};

export default Form;
