import {
    SUBMIT_TAGS_SUCCESS,
    SUBMIT_TAGS_FAIL
} from './actionTypes';

const initialState = {
    
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_TAGS_SUCCESS:
            return Object.assign({}, state, action.result);
        case SUBMIT_TAGS_FAIL:
            return state;
        default:
            return state;
    }
}

export default reducer 