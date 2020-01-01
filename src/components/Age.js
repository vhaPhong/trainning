import React from 'react';
import * as actionTypes from '../action/action';
import { useDispatch, useSelector } from 'react-redux';

export default function Age() {
	const countAge = useSelector((state) => state.age);
	const dispatch = useDispatch();

	function Add() {
		dispatch({ type: actionTypes.AGE_UP, value: 1 });
	}

	function Minus() {
		dispatch({ type: actionTypes.AGE_DOWN, value: 1 });
	}
	return (
		<div>
			<h1> Age: {countAge}</h1>
			<button type="button" onClick={Add}>
				+
			</button>
			<button type="button" onClick={Minus}>
				-
			</button>
		</div>
	);
}
