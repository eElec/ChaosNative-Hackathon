import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import { createStore } from 'redux';

import styles from '@assets/css/App.module.css';

import mainReducer from 'reducers/reducer';
import Sidebar from '@utils/components/Sidebar';
import AboutMe from '@views/AboutMe/AboutMe';
import ManageMeeting from '@views/ManageMeeting/ManageMeeting';
import { Provider } from 'react-redux';

const store = createStore(
	mainReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
