import {
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_ERROR
} from './actionTypes';
import { get, onSuccess, onError } from '../../utils/fetcher';
const api = window.$.api; // eslint-disable-ignore
export function fetchFriendsSuccess(result) {
    return {
        type: FETCH_FRIENDS_SUCCESS,
        result
    }
}

export function fetchFriendsError(error) {
    return {
        type: FETCH_FRIENDS_ERROR,
        error
    }
}

export function fetchFriends(data) {
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('好友列表获取失败'))
          .then(res => {
              if(res.data.code == 0) {
                dispatch(fetchFriendsSuccess(res.data));
              } else {
                dispatch(fetchFriendsError(res.data.msg));
              }
          })
          .catch(err => {
              dispatch(fetchFriendsError(err));
          })
    }
}