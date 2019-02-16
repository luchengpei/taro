"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _counter = require("../../actions/counter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//登陆页面
var Login = (_dec = (0, _index3.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    add: function add() {
      dispatch((0, _counter.add)());
    },
    dec: function dec() {
      dispatch((0, _counter.minus)());
    },
    asyncAdd: function asyncAdd() {
      dispatch((0, _counter.asyncAdd)());
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "password", "tip", "is_loading", "account", "add", "counter"], _this.config = {
      navigationBarTitleText: '登陆'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        account: '',
        password: '',
        tip: false,
        is_loading: false
      };
    }
    //账号检测

  }, {
    key: "account_check",
    value: function account_check(val) {
      this.setState({
        account: val,
        tip: false
      });
    }
    //密码检测

  }, {
    key: "password_check",
    value: function password_check(val) {
      this.setState({
        password: val,
        tip: false
      });
    }
    //没有账号去注册

  }, {
    key: "to_register",
    value: function to_register() {
      _index2.default.navigateTo({
        url: '/pages/register/register'
      });
    }
    //忘记密码

  }, {
    key: "forget",
    value: function forget() {
      _index2.default.atMessage({
        'message': '忘记密码，还登陆尼玛呢',
        'type': 'warning'
      });
    }
    //登陆

  }, {
    key: "to_login",
    value: function to_login() {
      this.props.add();
      var storateAccount = JSON.parse(_index2.default.getStorageSync('account'));
      var storatePassword = JSON.parse(_index2.default.getStorageSync('password'));
      if (!!this.state.account && !!this.state.password) {
        if (this.state.account !== storateAccount || this.state.password !== storatePassword) {
          this.setState({
            tip: true
          });
        } else {
          this.setState({
            is_loading: true
          }, function () {
            setTimeout(function () {
              _index2.default.navigateTo({
                url: "/pages/index/index"
              });
            }, 2000);
          });
        }
      } else if (!this.state.account || !this.state.password) {
        _index2.default.atMessage({
          'message': '请输入账号密码',
          'type': 'warning'
        });
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.$router.params, 'router');
      _index2.default.login({
        success: function success() {
          _index2.default.getUserInfo({
            success: function success(res) {
              var _res$userInfo = res.userInfo,
                  avatarUrl = _res$userInfo.avatarUrl,
                  city = _res$userInfo.city,
                  country = _res$userInfo.country,
                  nickName = _res$userInfo.nickName,
                  province = _res$userInfo.province;

              _index2.default.setStorageSync('avatarUrl', JSON.stringify(avatarUrl));
              _index2.default.setStorageSync('city', JSON.stringify(city));
              _index2.default.setStorageSync('country', JSON.stringify(country));
              _index2.default.setStorageSync('nickName', JSON.stringify(nickName));
              _index2.default.setStorageSync('province', JSON.stringify(province));
            }
          });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var password = this.password,
          tip = this.tip,
          is_loading = this.is_loading;

      var anonymousState__temp = "/image/login.jpg";
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ marginTop: '4px', marginBottom: '4px' });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }]);

  return Login;
}(_index.Component), _class2.properties = {
  "add": {
    "type": null,
    "value": null
  },
  "counter": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["account_check", "password_check", "to_login", "forget", "to_register"], _temp2)) || _class);
exports.default = Login;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Login, true));