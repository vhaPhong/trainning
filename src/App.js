import React from 'react';
import './App.css';
import User from './components/ComponentUser';
import Dogs from './components/ComponentUser2';
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<User />
				<Dogs />
			</div>
		);
	}
}

export default App;
