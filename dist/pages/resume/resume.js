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

//个人简历页面
var Resume = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Resume, _BaseComponent);

  function Resume() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Resume);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Resume.__proto__ || Object.getPrototypeOf(Resume)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "isCheck", "select", "imgs"], _this.config = {
      navigationBarTitleText: '个人简历'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Resume, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Resume.prototype.__proto__ || Object.getPrototypeOf(Resume.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isCheck: false,
        select: null,
        imgs: [{
          img: "/image/self.png"
        }, {
          img: "/image/ts1.png"
        }, {
          img: "/image/ts2.png"
        }, {
          img: "/image/ts3.png"
        }, {
          img: "/image/ts4.png"
        }, {
          img: "/image/ts5.png"
        }, {
          img: "/image/ts6.png"
        }]
      };
    }
  }, {
    key: "check",
    value: function check(index) {
      // console.log(index)
      // this.setState({
      //     select:index
      // },()=>{
      //     console.log(this.state.select,'hehe')
      // })
      if (this.state.isCheck) {
        this.setState({
          isCheck: false
        });
      } else {
        this.setState({
          isCheck: true,
          select: index
        });
      }
      // setTimeout(()=>{
      //     this.setState({
      //         isCheck:false
      //     })
      // },1000)
    }
  }, {
    key: "click",
    value: function click(index) {
      console.log(index, 'haha');
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;
      var anonymousState__temp = "/image/self.png";
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Resume;
}(_index.Component), _class.properties = {}, _class.$$events = [], _temp2);
exports.default = Resume;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Resume, true));