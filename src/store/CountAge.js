import * as actionTypes from '../action/action';

const initialState = {
	age: 20
};

const countAgeReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AGE_UP_ASYNC:
			return {
				...state,
				age: state.age + action.value
			};
		case actionTypes.AGE_DOWN:
			return {
				...state,
				age: state.age - action.value
			};
		default:
			return state;
	}
};

export default countAgeReducer;
