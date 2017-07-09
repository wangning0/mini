import { get, onSuccess, onError } from '../../utils/fetcher';
import {
    SUBMIT_TAGS_SUCCESS,
    SUBMIT_TAGS_FAIL
} from './actionTypes';
import { browserHistory } from 'react-router';
const api = window.$.api // eslint-disable-line

export function submitTagsSuccess(result) {
    return {
        type: SUBMIT_TAGS_SUCCESS,
        result
    }
}

export function submitTagFail(error) {
    return {
        type: SUBMIT_TAGS_FAIL,
        error
    }
}


export function submitTag(data, type) {
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('提交失败'))
          .then(res => {
              if(res.data.code == 0) {
                  console.log(type, 11);
                  if(type == 'init') {
                      browserHistory.push('/graph');
                  } else {
                      browserHistory.push('/my');
                  }
                  dispatch(submitTagsSuccess(res.data));
              } else {
                  dispatch(submitTagFail(res.data.msg));
              }
          })
          .catch(err => {
              dispatch(submitTagFail(err));
          })
    }
}