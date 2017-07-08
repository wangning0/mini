import {
    FETCH_UNREADS_SUCCESS,
    FETCH_UNREADS_FAIL
} from './actionTypes';

const initialState = []

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_UNREADS_SUCCESS:
            return action.result;
        case FETCH_UNREADS_FAIL:
        default:
            return state;
    }
}

export default reducer;