import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IntroPage1 from './pages/IntroPage1';

import MainPage from './pages/MainPage';
function App() {
	return (
		<Router>
			<div className='app_cont'>
				<Switch>
					<Route exact path='/' component={MainPage} />
					<Route exact path='/intro/1' component={IntroPage1} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
