import {
    PUBLISH_SUCCESS,
    PUBLISH_ERROR
} from './constants';

const initialState = {
    
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case PUBLISH_SUCCESS:
            return Object.assign({}, state, action.result);
        case PUBLISH_ERROR:
            return state;
        default:
            return state;
    }
}

export default reducer 