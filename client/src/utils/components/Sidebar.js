import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from '@assets/css/Sidebar.module.css';
import { ReactComponent as Hamburger } from '@assets/icons/hamburger.svg';
import { ReactComponent as Home } from '@assets/icons/home.svg';
import { ReactComponent as About } from '@assets/icons/about.svg';

const Sidebar = () => {
	return (
		<div className={styles.main}>
			<div className={styles.nav}>
				<div className={styles.header}><Hamburger className={styles.hamburger}/> 1806188</div>
				<NavLink
					to='/home'
					className={styles.navLink}
					activeClassName={styles.selected}
				>
					<Home />
					Home
				</NavLink>
				<NavLink
					to='/about'
					className={styles.navLink}
					activeClassName={styles.selected}
				>
					<About />
					About Me
				</NavLink>
			</div>
		</div>
	);
};

export default Sidebar;
