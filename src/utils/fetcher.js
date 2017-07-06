import 'whatwg-fetch';
import url from 'url';

export const get = (api, param) => fetch(
    url.format({
        pathname: api,
        query: param || {}
    })
)

export const post = (api, param) => fetch(api, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(param)
})

export const onSuccess = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((json) => {
    throw new Error(`${json.msg}`);
  });
};

export const onError = (msg) => () => {
  throw new Error(`${msg || '操作失败'}，请检查网络设置。`);
};