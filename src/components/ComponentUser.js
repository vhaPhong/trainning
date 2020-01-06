import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../action';

export default function User() {
	const users = useSelector((state) => state.userReducer.value);
	const dispatch = useDispatch();

	function handleGetUser() {
		dispatch({ type: actionTypes.GET_USER });
	}
	return (
		<div>
			<button type="button" onClick={handleGetUser}>
				Get User
			</button>
			<div>
				{users.results ? (
					<div>
						<img src={users.results[0].picture.large} alt="" />
						<p>
							{users.results[0].name.title} {users.results[0].name.first}
						</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
