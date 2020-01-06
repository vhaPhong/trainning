import * as actionTypes from '../action';

const initialState = {
    value :'',
}

const userReducer2 = (state = initialState, action) => {
	switch (action.type) {
        case actionTypes.GET_API_USER2:
            return {
                ...state,
                value: action.data
            }
		default:
			return state;
	}
};

export default userReducer2;