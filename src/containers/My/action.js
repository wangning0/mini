import { get, onSuccess, onError } from '../../utils/fetcher';
import {
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAIL
} from './actionTypes';

const api = window.$.api // eslint-disable-line

export function fetchUserInfoSuccess(result) {
    return {
        type: FETCH_USER_INFO_SUCCESS,
        result
    }
}

export function fetchUserInfoFail(error) {
    return {
        type: FETCH_USER_INFO_FAIL,
        error
    }
}


export function fetchUserInfo(data) {
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('提交失败'))
          .then(res => {
              if(res.data.code == 0) {
                  dispatch(fetchUserInfoSuccess(res.data.result));
              } else {
                  dispatch(fetchUserInfoFail(res.data.msg));
              }
          })
          .catch(err => {
              dispatch(fetchUserInfoFail(err));
          })
    }
}