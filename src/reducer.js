import {
    CHANGE_BUBBLES,
    GET_UNSER_INFO
} from './actionTypes';
const $ = window.$; // eslint-disable-line
// alert($.testinfo());
const info = JSON.parse($.testinfo());
//const info = $.testinfo();
// console.log(info);
const initialState = info; // eslint-disable-line

/**
 * {"ret":200,"data":{"code":0,"msg":"login success","UserID":"7","numofBubbles":1},"msg":""}
 */

function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_BUBBLES:
            return Object.assign({}, state, {
                numofBubbles: Number(action.result) + Number(state.numofBubbles)
            });
        case GET_UNSER_INFO:
            return action.result;
        default: 
            return state;
    }
}

export default reducer;
