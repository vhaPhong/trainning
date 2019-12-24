import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Member(props) {
    let history = useHistory();


	const handleOut = () => {
        localStorage.removeItem('remember');
        history.push('/');
	};

	return (
		<div>
			<h2>You're logged in</h2>
			<button type="button" onClick={handleOut}>
				Log out
			</button>
		</div>
	);
}
