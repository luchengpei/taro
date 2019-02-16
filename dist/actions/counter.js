'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minus = exports.add = undefined;
exports.asyncAdd = asyncAdd;

var _counter = require('../constants/counter.js');

var add = exports.add = function add() {
  return {
    type: _counter.ADD,
    data: 'add'
  };
};
var minus = exports.minus = function minus() {
  return {
    type: _counter.MINUS,
    data: 'minus'
  };
};
function asyncAdd() {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(add());
    }, 2000);
  };
}