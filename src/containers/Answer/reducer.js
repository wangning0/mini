import {
    FETCH_BUBBLE_INFO_SUCCESS,
    FETCH_BUBBLE_INFO_ERROR,
    SUBMIT_ANSWER_SUCCESS,
    SUBMIT_ANSWER_ERROR
} from './actionTypes';

const initialState = {

}

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BUBBLE_INFO_SUCCESS:
            return Object.assign({}, state, action.result)
        case FETCH_BUBBLE_INFO_ERROR:
        case SUBMIT_ANSWER_SUCCESS:
            return Object.assign({}, state, {
                tips: action.result.msg
            })
        case SUBMIT_ANSWER_ERROR:
        default:
            return state
    }
}

export default reducer;