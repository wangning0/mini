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


export function submitBubble(data, controllRoute) {
    // alert(data);
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('提交失败'))
          .then(res => {
              if(res.data.code == 0) {
                  dispatch(publishSuccess(1));
                  if(controllRoute && controllRoute.numofBubbles) {
                    browserHistory.push('/graph');
                  } else {
                      browserHistory.push('/settag/init');
                  }
              } else {
                  dispatch(publishFail(res.data.msg));
              }
          })
          .catch(err => {
              dispatch(publishFail(err));
          })
    }
}