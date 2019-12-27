import * as actionTypes from '../../action/action';

const initialState = {
	results: []
};

const resultReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: Math.random() * 1000, value: action.result })
			};
		default:
			return state;
	}
};

export default resultReducer;
