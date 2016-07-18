import request from 'superagent';
import Promise from 'bluebird';

export const ASYNC_CALL_STARTED = 'ASYNC_CALL_STARTED';

export function asyncStarted() {
  return {
    type: ASYNC_CALL_STARTED
  };
}

export function asyncRequest(url, data = {}, headers = {}, withCredentials = false) {
  return new Promise((resolve, reject) => {
    let _request = request.get(url);
    if (withCredentials) {
      _request = _request.withCredentials();
    }

    headers = Object.assign({}, headers, { 'X-Requested-With: XMLHttpRequest' });
    _request.query(data)
      .set(headers)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      }
    );
  });
}

export function postRequest(url, data, headers = {}) {
  headers = Object.assign({}, headers, { 'X-Requested-With': 'XMLHttpRequest' });
  return new Promise((resolve, reject) => {
    request.post(url).send(data)
    .set(headers)
    .end((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}

export function putRequest(url, data, headers = {}) {
  headers = Object.assign({}, headers, { 'X-Requested-With': 'XMLHttpRequest' });
  return new Promise((resolve, reject) => {
    request.put(url).send(data)
    .set(headers)
    .end((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}

export function deleteRequest(url, headers = {}) {
  headers = Object.assign({}, headers, { 'X-Requested-With': 'XMLHttpRequest' });
  return new Promise((resolve, reject) => {
    request.del(url)
    .set(headers)
    .end((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}
