import React from 'react';
import { Link } from 'react-router-dom';

import styles from '@assets/css/Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={styles.main}>
			<div className={styles.nav}>
				<div className={styles.header}>1806188</div>
				<Link to="/home">
					<div>
						<span>icon</span>
						Home
					</div>
				</Link>
				<Link to="/about">
					<div>
						<span>icon</span>
						About Me
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
