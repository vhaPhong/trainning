import React from 'react';
import './App.css';
import Counter from './components/CountComponent'
import Name from './components/InputComponent';

function App() {
	return (
			<div className="App">
				<Counter />
				<Name/>
			</div>
	);
}

export default App;
