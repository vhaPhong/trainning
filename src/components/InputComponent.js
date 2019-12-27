import React from 'react';
import * as actionTypes from '../action/action';
import { useSelector, useDispatch } from 'react-redux';

export default function Name() {
	const input = useSelector((state) => state.name.text);
	const result = useSelector((state) => state.res.results);
	const dispatch = useDispatch();

	function handleInput(event) {
		dispatch({ type: actionTypes.INTPUT_NAME, value: event.target.value });
	}
	function onStoreResult() {
		dispatch({ type: actionTypes.STORE_RESULT, result: input });
		console.log(result);
	}
	return (
		<div>
			<input type="text" onChange={handleInput} placeholder="Input name" />
			<button onClick={onStoreResult}>Store Result</button>
			<p>{input}</p>
			<ul>{result.map((el) => <li key={el.id}>{el.value}</li>)}</ul>
		</div>
	);
}
