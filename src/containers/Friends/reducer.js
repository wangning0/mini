import {
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_ERROR
} from './actionTypes';

const initialState = []

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_FRIENDS_SUCCESS:
            return Object.assign({}, state, action.result);
        case FETCH_FRIENDS_ERROR:
        default:
            return state;
            
    }
}

export default reducer;