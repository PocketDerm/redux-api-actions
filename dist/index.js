'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ASYNC_CALL_STARTED = undefined;
exports.asyncStarted = asyncStarted;
exports.asyncRequest = asyncRequest;
exports.postRequest = postRequest;
exports.putRequest = putRequest;
exports.deleteRequest = deleteRequest;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASYNC_CALL_STARTED = exports.ASYNC_CALL_STARTED = 'ASYNC_CALL_STARTED';

function asyncStarted() {
  return {
    type: ASYNC_CALL_STARTED
  };
}

function asyncRequest(url) {
  var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return new _promise2.default(function (resolve, reject) {
    _superagent2.default.get(url).query(data).set(headers).end(function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}

function postRequest(url, data) {
  var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return new _promise2.default(function (resolve, reject) {
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
  var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return new _promise2.default(function (resolve, reject) {
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
  var headers = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return new _promise2.default(function (resolve, reject) {
    _superagent2.default.del(url).send(data).set(headers).end(function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}