import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../action/action';

export default function Counter() {
	const counter = useSelector((state) => state.ctr.counter);
	const dispatch = useDispatch();

	function Add() {
		dispatch({ type: actionTypes.ADD });
	}
	function Minus() {
		dispatch({ type: actionTypes.MINUS });
	}
	return (
		<div>
			<h1>Counter {counter}</h1>
			<button type="button" onClick={Add}>
				+
			</button>
			<button type="button" onClick={Minus}>
				-
			</button>
		</div>
	);
}
