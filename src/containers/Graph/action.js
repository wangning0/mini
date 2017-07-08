import { get, post, onSuccess, onError } from '../../utils/fetcher';

import {
    FETCH_BUBBLE_INFO_SUCCESS,
    FETCH_BUBBLE_INFO_ERROR
} from './actionTypes';

const api = window.$.api; // eslint-disable-ignore

export function fetchBubbleInfoSuccess(data) {
    return {
        type: FETCH_BUBBLE_INFO_SUCCESS,
        result: data 
    }
}

export function fetchBubbleInfoFail(err) {
    return {
        type: FETCH_BUBBLE_INFO_ERROR,
        error: err
    }
}
// service=Act.getAroundInfo&UserID=7&distance=20000000&longtitude=156.234894&latitude=26.4859648
export function fetchBubbleInfo(data) {
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('获取信息失败，请重新获取'))
          .then(res => {
              if(res.data.code == 0) {
                dispatch(fetchBubbleInfoSuccess(res.data))
              } else {
                dispatch(fetchBubbleInfoFail(res.data.msg));
              }
          })
          .catch(err => {
              dispatch(fetchBubbleInfoFail(err));
          })
    }
}