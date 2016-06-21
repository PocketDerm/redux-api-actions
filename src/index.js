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
  return new Promise((resolve, reject) => {
    request.del(url).send(data)
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
