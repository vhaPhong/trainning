import * as actionTypes from '../action';

const initialState = {
	value: ''
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_API_USER:
			return {
				...state,
				value: action.value
			};
		default:
			return state;	
	}
};

export default userReducer;
