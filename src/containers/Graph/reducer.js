import {
    FETCH_BUBBLE_INFO_SUCCESS,
    FETCH_BUBBLE_INFO_ERROR
} from './actionTypes';

const initialState = {
    
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BUBBLE_INFO_SUCCESS:
            return Object.assign({}, state, action.result);
        case FETCH_BUBBLE_INFO_ERROR:
            return state;
        default:
            return state;
    }
}

export default reducer;