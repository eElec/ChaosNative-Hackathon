import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import styles from '@assets/css/App.module.css';

import Sidebar from '@utils/components/Sidebar';
import AboutMe from '@views/AboutMe/AboutMe';
import ManageMeeting from '@views/ManageMeeting/ManageMeeting';

function App() {
	return (
		<Router>
			<div className={styles.container}>
				<Sidebar />
				<div className={styles.main}>
					<Switch>
						<Route path='/home'>
							<ManageMeeting />
						</Route>
						<Route path='/about'>
							<AboutMe />
						</Route>
						<Route exact path='/'>
							<Redirect to='/home' />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
