import {
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAIL
} from './actionTypes';

const initialState = {
    
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER_INFO_SUCCESS:
            return Object.assign({}, state, action.result);
        case FETCH_USER_INFO_FAIL:
            return state;
        default:
            return state;
    }
}

export default reducer;