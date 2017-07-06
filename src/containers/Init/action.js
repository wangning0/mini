import { get, onSuccess, onError } from '../../utils/fetcher';
import {
    CHANGE_BUBBLES,
    PUBLISH_ERROR
} from './constants';
import { browserHistory } from 'react-router';

const api = window.$.api // eslint-disable-line

export function publishSuccess(result) {
    return {
        type: CHANGE_BUBBLES,
        result
    }
}

export function publishFail(error) {
    return {
        type: PUBLISH_ERROR,
        error
    }
}


export function submitBubble(data) {
    // alert(data);
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('提交失败'))
          .then(res => {
              alert(res);
              if(res.data.code == 0) {
                alert(111);
                  dispatch(publishSuccess(1));
                  browserHistory.push('/graph');
              } else {
                  alert(222);
                  dispatch(publishFail(res.data.msg));
              }
          })
          .catch(err => {
              dispatch(publishFail(err));
          })
    }
}