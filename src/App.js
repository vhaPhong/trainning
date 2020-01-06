import React from 'react';
import './App.css';
import User from './components/ComponentUser';
import User2 from './components/ComponentUser2';
import * as actionTypes from './action';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	function handleApi() {
		dispatch({ type: actionTypes.GET_USER });
		dispatch({ type: actionTypes.GET_USER2 });
	}
	return (
		<div className="App">
			<button onClick={handleApi}>Show</button>
			<User />
			<User2 />
		</div>
	);
}

export default App;
