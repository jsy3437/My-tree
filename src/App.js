import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IntroPage1 from './pages/wateringPage';
import IntroPage2 from './pages/IntroPage2';
import Auth from './hoc/Auth';
import MainPage from './pages/MainPage';
function App() {
	return (
		<Router>
			<div className='app_cont'>
				<Switch>
					<Route exact path='/' component={Auth(MainPage, null)} />
					<Route exact path='/intro/1' component={Auth(IntroPage1, null)} />
					<Route exact path='/intro/2' component={Auth(IntroPage2, null)} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
