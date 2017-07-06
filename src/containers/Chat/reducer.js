import {
    RECEIVE_MESSAGE,
    CLEAR_MESSAGE,
    ADD_MESSAGE
} from './actionTypes';

const initialState = []

function reducer(state = initialState, action) {
    switch(action.type) {
        case RECEIVE_MESSAGE:
            const newState = action.result && action.result.name == action.name ? state : [...state, action.result];
            return newState;
        case CLEAR_MESSAGE:
            return initialState;
        case ADD_MESSAGE:
            return [...state, action.result];
        default:
            return state;
    }
}

export default reducer;