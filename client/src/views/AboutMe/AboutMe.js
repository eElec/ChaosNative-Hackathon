import Paper from '@utils/components/Paper';
import React from 'react';

import styles from './styles/AboutMe.module.css';

const AboutMe = () => {
	return (
		<div className={styles.main}>
			<h1>AboutMe</h1>
			<Paper>
				<div className={styles.info}>
					<p>Name: Adrish Aditya</p>
					<p>Roll: 1806188</p>
					<p>
						Github Profile: <a href='https://github.com/eElec'>@eElec</a>
					</p>
					<p>
						Skills: Java, JavaScript, C++, MySQL, NodeJs, Java Backend (Apache
						Tomcat, JDBC), ReactJs
					</p>
				</div>
				<hr />
				<div>
					<p>Projects:</p>
					<p>
						ELabs-nodeJS:{' '}
						<a href='https://github.com/eElec/ELabs-nodeJS'>
							https://github.com/eElec/ELabs-nodeJS
						</a>
					</p>
					<p>
						EComm-AngularJS:{' '}
						<a href='https://github.com/eElec/ELabs-nodeJS'>
							https://github.com/eElec/EComm-AngularJS
						</a>
					</p>
					<br />
				</div>
			</Paper>
		</div>
	);
};

export default AboutMe;
