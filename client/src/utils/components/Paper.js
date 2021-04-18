import React from 'react';

import styles from '@assets/css/App.module.css';

const Paper = (props) => {
	return <div className={styles.paper}>{props.children}</div>;
};

export default Paper;
