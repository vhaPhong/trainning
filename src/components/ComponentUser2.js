import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../action';

export default function Dog() {
	const User2 = useSelector((state) => state.dogReducer.value);
	const dispatch = useDispatch();
	function handleGetUser2() {
		dispatch({ type: actionTypes.GET_DOG });
	}
	return (
		<div>
		<button type="button" onClick={handleGetUser2}>
			Get User2
		</button>
		<div>
			{User2.results ? (
				<div>
					<img src={User2.results[0].picture.large} alt="" />
					<p>
						{User2.results[0].name.title} {User2.results[0].name.first}
					</p>
				</div>
			) : null}
		</div>
	</div>
	);
}
