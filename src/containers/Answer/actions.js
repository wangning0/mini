import {
    FETCH_ONE_BUBBLE_INFO_SUCCESS,
    FETCH_ONE_BUBBLE_INFO_ERROR,
    SUBMIT_ANSWER_SUCCESS,
    SUBMIT_ANSWER_ERROR
} from './actionTypes';
import { get, post, onSuccess, onError } from '../../utils/fetcher';
import { browserHistory } from 'react-router'
const api = window.$.api; // eslint-disable-ignore
export function fetchOneBubbleInfoSuccess(result) {
    return {
        type: FETCH_ONE_BUBBLE_INFO_SUCCESS,
        result
    }
}

export function fetchOneBubbleInfoFail(error) {
    return {
        type: FETCH_ONE_BUBBLE_INFO_ERROR,
        error
    }
}

export function fetchOneBubbleInfo(data) {
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('获取泡泡信息失败'))
          .then(res => {
              if(res.data.code == 0) {
                dispatch(fetchOneBubbleInfoSuccess(res.data))
              } else {
                  dispatch(fetchOneBubbleInfoFail(res.data.msg))
              }
          })
          .catch(err => {
              dispatch(fetchOneBubbleInfoFail(err))
          })
    }
}

export function submitAnswerSuccess(result) {
    return {
        type: SUBMIT_ANSWER_SUCCESS,
        result
    }
}

export function submitAnswerFail(error) {
    return {
        type: SUBMIT_ANSWER_ERROR,
        error
    }
}

export function submitAnswer(data, chatPeople) {
    return (dispatch) => {
        get(api, data).then(onSuccess, onError('提交答案失败'))
          .then(res => {
              if(res.data.code == 0) {
                  browserHistory.push(`/chat/${chatPeople.from}/${chatPeople.to}`);
                //   dispatch(submitAnswerSuccess(res.data));
                //   if(res.data.matchpercent >= 0.5) {
                //       browserHistory.push(`/chat/${chatPeople.from}/${chatPeople.to}`);
                //   } else {
                //       if(res.data.left_to_stick <= 0) {
                //           browserHistory.push('/graph');
                //       }
                //   }
              } else {
                  dispatch(submitAnswerFail(res.msg));
              }
          })
          .catch(err => {
              dispatch(submitAnswerFail(err));
          })
    }
}