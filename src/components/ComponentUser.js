import React from 'react';
import { useSelector } from 'react-redux';

export default function User() {
	const users = useSelector((state) => state.userReducer.value);
	return (
		<div>
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
