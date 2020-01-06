import * as actionTypes from '../action';

const initialState = {
    value :'',
}

const dogReducer = (state = initialState, action) => {
	switch (action.type) {
        case actionTypes.GET_API_DOG:
            return {
                ...state,
                value: action.data
            }
		default:
			return state;
	}
};

export default dogReducer;