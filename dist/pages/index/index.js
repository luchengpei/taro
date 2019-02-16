"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "parentParams", "app", "current", "randomCode", "list"], _this.config = {
      navigationBarTitleText: '随便玩玩'
    }, _this.createCode = function () {
      var code = '';
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
      for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * 36);
        code += random[index];
      }
      return code;
    }, _this.Pack = function (val) {
      // console.log('parent',777);
      // console.log('child params',val)
      _this.setState({
        parentParams: val
      });
      //console.log(this.state.img,'xx')
    }, _this.handleClick = function (val) {
      _this.setState({
        current: val,
        randomCode: _this.createCode()
      }, function () {
        console.log(_this.state.randomCode, '987');
        switch (_this.state.current) {
          case 0:
            _index2.default.setNavigationBarTitle({
              title: '随便玩下'
            });
            break;
          case 1:
            _index2.default.setNavigationBarTitle({
              title: '个人中心'
            });
            break;
        }
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        parentParams: '',
        app: _index2.default.getApp().state.isLogin,
        current: 0,
        randomCode: this.createCode(),
        list: [{
          title: '昵称',
          content: JSON.parse(_index2.default.getStorageSync('nickName')),
          color: 'orange'
        }, {
          title: '性别',
          content: '男',
          color: 'skyblue'
        }, {
          title: '出生年月',
          content: '1995-04',
          color: 'yellowgreen'
        }, {
          title: '城市',
          content: "\u5E7F\u4E1C\u8302\u540D",
          color: 'pink'
        }]
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(_index2.default.getApp().state, 'willMout');
      _index2.default.showNavigationBarLoading();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.state.randomCode, '90');
      _index2.default.hideNavigationBarLoading();
      _index2.default.login({
        success: function success() {
          _index2.default.getUserInfo({
            success: function success(res) {
              console.log(res, 'xx');
            }
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      //
      var tabList = [{ title: '标签页1' }, { title: '标签页2' }];

      var anonymousState__temp = [{ title: '随便玩下', iconType: 'bullet-list', text: 'new' }, { title: '我的', iconType: 'user' }];
      var anonymousState__temp2 = "/image/smlz.png";
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.properties = {}, _class.$$events = ["handleClick", "Pack"], _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));