'use strict';

exports.__esModule = true;
exports.ASYNC_CALL_STARTED = undefined;
exports.asyncStarted = asyncStarted;
exports.asyncRequest = asyncRequest;
exports.postRequest = postRequest;
exports.putRequest = putRequest;
exports.deleteRequest = deleteRequest;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASYNC_CALL_STARTED = exports.ASYNC_CALL_STARTED = 'ASYNC_CALL_STARTED';

function asyncStarted() {
  return {
    type: ASYNC_CALL_STARTED
  };
}

function asyncRequest(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var withCredentials = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  return new _bluebird2.default(function (resolve, reject) {
    var _request = _superagent2.default.get(url);
    if (withCredentials) {
      _request = _request.withCredentials();
    }

    headers = Object.assign({}, headers, { 'X-Requested-With': 'XMLHttpRequest' });
    _request.query(data).set(headers).end(function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}

function postRequest(url, data) {
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  headers = Object.assign({}, headers, { 'X-Requested-With': 'XMLHttpRequest' });
  return new _bluebird2.default(function (resolve, reject) {
    _superagent2.default.post(url).send(data).set(headers).end(function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}

function putRequest(url, data) {
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  headers = Object.assign({}, headers, { 'X-Requested-With': 'XMLHttpRequest' });
  return new _bluebird2.default(function (resolve, reject) {
    _superagent2.default.put(url).send(data).set(headers).end(function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}

function deleteRequest(url) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  headers = Object.assign({}, headers, { 'X-Requested-With': 'XMLHttpRequest' });
  return new _bluebird2.default(function (resolve, reject) {
    _superagent2.default.del(url).set(headers).end(function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}