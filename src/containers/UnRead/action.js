import { get, onSuccess, onError } from '../../utils/fetcher';
import {
    FETCH_UNREADS_SUCCESS,
    FETCH_UNREADS_FAIL
} from './actionTypes';
import { browserHistory } from 'react-router'

const api = 'http://localhost:9001/getUnreads' // eslint-disable-line

export function fetchUnreadsSuccess(result) {
    return {
        type: FETCH_UNREADS_SUCCESS,
        result
    }
}

export function fetchUnreadsSuccessFail(error) {
    return {
        type: FETCH_UNREADS_FAIL,
        error
    }
}


export function fetchUnreads(data) {
    // alert(data);
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('提交失败'))
          .then(res => {
              if(res.code == 0) {
                  console.log(res.data);
                  dispatch(fetchUnreadsSuccess(res.data));
              } else {
                  dispatch(fetchUnreadsSuccessFail(res.msg));
              }
          })
          .catch(err => {
              dispatch(fetchUnreadsSuccessFail(err));
          })
    }
}