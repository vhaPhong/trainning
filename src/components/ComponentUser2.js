import React from 'react';
import { useSelector } from 'react-redux';

export default function User2() {
	const User2 = useSelector((state) => state.userReducer2.value);
	return (
		<div>
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
