import {
    CHANGE_BUBBLES,
    GET_UNSER_INFO,
    GET_CURRENT_NAME
} from './actionTypes';
const $ = window.$; // eslint-disable-line
// alert($.testinfo());
let data = $.testinfo();
if(typeof data == 'string') {
    data = JSON.parse(data);
}
// const info = JSON.parse($.testinfo());
//const info = $.testinfo();
// console.log(info);
const initialState = data; // eslint-disable-line

/**
 * {"ret":200,"data":{"code":0,"msg":"login success","UserID":"7","numofBubbles":1},"msg":""}
 */

function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_BUBBLES:
            return Object.assign({}, state, {
                numofBubbles: Number(action.result) + Number(state.numofBubbles)
            });
        case GET_CURRENT_NAME:
            return Object.assign({}, data, {
                cur_username: action.result
            })
        case GET_UNSER_INFO:
            return action.result;
        default: 
            return state;
    }
}

export default reducer;
