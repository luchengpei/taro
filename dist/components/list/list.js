"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//列表组件
var List = (_temp2 = _class = function (_BaseComponent) {
  _inherits(List, _BaseComponent);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "style", "color", "background", "title", "content"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: "_constructor",
    value: function _constructor() {
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        style: {}
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          color = _props.color,
          background = _props.background;

      console.log(this.props, 'props');
      if (this.props.title) {
        this.setState({
          style: {
            color: color,
            backgroundColor: background
          }
        });
      }
    }

    //去详情

  }, {
    key: "detail",
    value: function detail(e) {
      if (e._relatedInfo.anchorTargetText === '九点起床！') {
        _index2.default.navigateTo({
          url: '/pages/resume/resume'
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var jt = null;
      if (this.__props.content === '九点起床！') {} else {}
      var anonymousState__temp = (0, _index.internal_inline_style)(this.__state.style);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return List;
}(_index.Component), _class.properties = {
  "color": {
    "type": null,
    "value": null
  },
  "background": {
    "type": null,
    "value": null
  },
  "title": {
    "type": null,
    "value": null
  },
  "content": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["detail"], _temp2);


List.defaultProps = {
  title: '',
  content: ''
};
List.PropTypes = {
  title: _index4.default.string,
  content: _index4.default.string
};
exports.default = List;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(List));