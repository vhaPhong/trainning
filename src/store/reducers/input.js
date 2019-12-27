import * as actionTypes from '../../action/action';
const initialState = {
	text: ''
};

const inputReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INTPUT_NAME:
			return {
				...state,
				text: action.value
			};
		default:
			return state;
	}
};

export default inputReducer;
