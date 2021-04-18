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
          <p>To fill</p>
					<br />
				</div>
			</Paper>
		</div>
	);
};

export default AboutMe;
