"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _gbData = require("../../gbData/gbData.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Register, _BaseComponent);

  function Register() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "account", "password", "phone", "msg", "yzm", "code", "isOpened", "is_register", "isOk"], _this.config = {
      navigationBarTitleText: '注册'
    }, _this.hanndelAccount = function (val) {
      _this.setState({
        account: val,
        isOk: false
      });
    }, _this.createCode = function () {
      var code = '';
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
      for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * 36);
        code += random[index];
      }
      return code;
    }, _this.onSubmit = function () {
      if (!!_this.state.account.length && !!_this.state.password.length && !!_this.state.phone.length && _this.state.code === _this.state.yzm) {
        (0, _gbData.set)('account', _this.state.account);
        (0, _gbData.set)('password', _this.state.password);
        (0, _gbData.set)('phone', _this.state.phone);
        _index2.default.setStorageSync('account', JSON.stringify(_this.state.account));
        _index2.default.setStorageSync('password', JSON.stringify(_this.state.password));
        _this.setState({
          msg: true,
          phone: _this.state.phone,
          password: _this.state.password,
          account: _this.state.account,
          isOpened: true,
          is_register: true
        }, function () {
          setTimeout(function () {
            _index2.default.navigateTo({
              url: "/pages/login/login?account=" + _this.state.account + "&password=" + _this.state.password + "&phone=" + _this.state.phone
            });
          }, 2000);
        });
      } else {
        _index2.default.atMessage({
          'message': '请检查你的注册信息',
          'type': 'error',
          duration: 2000
        });
      }
    }, _this.hanndelPwd = function (val) {
      _this.setState({
        password: val
      });
    }, _this.hanndelPhone = function (val) {
      _this.setState({
        phone: val
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Register, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Register.prototype.__proto__ || Object.getPrototypeOf(Register.prototype), "_constructor", this).call(this, props);
      this.state = {
        account: '',
        password: '',
        phone: '',
        msg: false,
        yzm: this.createCode(),
        code: '',
        isOpened: false,
        is_register: false,
        isOk: false
      };
    }
  }, {
    key: "handleChange",
    value: function handleChange(val) {
      this.setState({
        code: val
      });
    }
    //生成验证码

  }, {
    key: "reset",

    //刷新验证码
    value: function reset() {
      this.setState({
        yzm: this.createCode()
      });
    }
  }, {
    key: "click",

    //注册成功去登陆页面登陆
    value: function click() {
      _index2.default.redirectTo({
        url: "/pages/login/login?account=" + this.state.account + "&password=" + this.state.password + "&phone=" + this.state.phone
      });
      // if(this.state.is_register){
      //     Taro.navigateTo({
      //         url:`/pages/login/login?account=${this.state.account}&password=${this.state.password}&phone=${this.state.phone}`
      //     })
      // }else{
      //     this.setState({
      //         isOk:true
      //     })
      // }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var account = this.account,
          password = this.password,
          phone = this.phone;

      var anonymousState__temp = "/image/mm.jpg";
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Register;
}(_index.Component), _class.properties = {}, _class.$$events = ["onSubmit", "hanndelAccount", "hanndelPwd", "hanndelPhone", "handleChange", "reset", "click"], _temp2);
exports.default = Register;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Register, true));