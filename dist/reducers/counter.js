'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = counter;
var INITIAL_STATE = {
  num: 0
  //这里的state 可以默认给个空 这里随便 看情况看自己
};function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  console.log(action, 'reducer');
  switch (action.type) {
    case 'ADD':
      return _extends({}, state, {
        num: state.num + 1 //这个是你想返回什么数据
      });
    case 'MINUS':
      return _extends({}, state, {
        num: state.num - 1
      });
    default:
      return state;
  }
}