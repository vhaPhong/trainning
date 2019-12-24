import React from 'react';
import Login from './components/login';
import Success from './components/success';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<ul>
						<li>
							<NavLink to="/" activeStyle={{ color: 'red' }} exact>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/login" activeStyle={{ color: 'red' }} exact>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink to="/information" activeStyle={{ color: 'red' }} exact>
								Information
							</NavLink>
						</li>
					</ul>
					<Route
						path="/"
						exact
						render={() => {
							return <h1 style={{ textAlign: 'center' }}>Home</h1>;
						}}
					/>
					<Route path="/login" exact component={Login} />
					<Route
						path="/information"
						exact
						render={() => {
							return localStorage.getItem('remember') ? <Success /> : <Redirect to="/login" />;
						}}
					/>
				</div>
			</Router>
		);
	}
}
