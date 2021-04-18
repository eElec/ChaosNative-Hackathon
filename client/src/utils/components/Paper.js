import React from 'react';

import styles from '@assets/css/App.module.css';

const Paper = (props) => {
	return <div className={styles.paper} style={props.style}>{props.children}</div>;
};

export default Paper;
