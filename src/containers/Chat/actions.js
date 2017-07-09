import {
    RECEIVE_MESSAGE,
    CLEAR_MESSAGE,
    ADD_MESSAGE
} from './actionTypes';
import { get, onSuccess, onError } from '../../utils/fetcher';
import { bindActionCreators } from 'redux';
const api = window.$.api; // eslint-disable-ignore

export function getChatMessage(result, name) {
    return {
        type: RECEIVE_MESSAGE,
        result,
        name
    }
}

export function clearMessage() {
    return {
        type: CLEAR_MESSAGE,
        result: []
    }
}

export function addChatMessage(result) {
    return {
        type: ADD_MESSAGE,
        result
    }
}


export function addFriend(data) {
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('添加失败'))
        .then(res => {
            if(res.data.code == 0) {
                alert("添加好友成功");
                bindActionCreators.push('/friends')
                // dispatch(fetchFriendsSuccess(res.data));
            } else {
                // dispatch(fetchFriendsError(res.data.msg));
            }
        })
        .catch(err => {
           //  dispatch(fetchFriendsError(err));
        })
    }
}

// export function createMessage(data) {
//     return (dispatch) => {
//         dispatch(addMessage(data))
//     }
// }