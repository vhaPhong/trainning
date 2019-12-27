import * as actionTypes from '../../action/action'
const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.MINUS:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state    
    }
}

export default counterReducer