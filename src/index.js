import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'
import App from './App';
import SoccerTeam from './SoccerTeam'
import './css/index.css';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

class Routes extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Nav />
					<Switch>
					<Route exact path='/' component={App} />
					<Route path='/soccerTeam' component={SoccerTeam} />
					<Route render={function(){ return <p>Not found.</p> }} />
					</Switch>
				</div>
			</Router>

		)
	}
}


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
