import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WateringPage from './pages/WateringPage';
import WaitingPage from './pages/WaitingPage';
import Auth from './hoc/Auth';
import MainPage from './pages/MainPage';
import PeriodPage from './pages/PeriodPage';
import IntroPage from './pages/IntroPage';
import LoadingPage from './pages/LoadingPage';
import PlantListPage from './pages/PlantListPage';
function App() {
	return (
		<Router>
			<div className='app_cont'>
				<Switch>
					<Route exact path='/' component={Auth(MainPage, null)} />
					<Route exact path='/loading' component={Auth(LoadingPage, null)} />
					<Route exact path='/intro' component={Auth(IntroPage, null)} />
					<Route exact path='/plant/list' component={Auth(PlantListPage, null)} />
					<Route exact path='/period' component={Auth(PeriodPage, null)} />
					<Route exact path='/watering' component={Auth(WateringPage, null)} />
					<Route exact path='/waiting' component={Auth(WaitingPage, null)} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
