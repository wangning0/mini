import {
    CHANGE_BUBBLES,
} from './actionTypes';
const $ = window.$; // eslint-disable-line
//const info = JSON.parse($.testinfo());
const info = $.testinfo();
// console.log(info);
const initialState = info;

/**
 * {"ret":200,"data":{"code":0,"msg":"login success","UserID":"7","numofBubbles":1},"msg":""}
 */

function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_BUBBLES:
            return Object.assign({}, state, {
                numofBubbles: Number(action.result) + Number(state.numofBubbles)
            });
        default: 
            return state;
    }
}

export default reducer;