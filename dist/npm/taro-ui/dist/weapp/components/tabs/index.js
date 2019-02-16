"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /* eslint-disable react/no-string-refs */


var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtTabs = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtTabs, _AtComponent);

  function AtTabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtTabs.__proto__ || Object.getPrototypeOf(AtTabs)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "loopArray0", "tabList", "scroll", "tabDirection", "scrollLeft", "scrollTop", "scrollIntoView", "__fn_onClick", "swipeable", "current", "customStyle", "className", "height", "animated", "children"], _this.$$refs = [{
      type: "dom",
      id: "gXFJG",
      refName: "refTabHeader",
      fn: null
    }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtTabs, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtTabs.prototype.__proto__ || Object.getPrototypeOf(AtTabs.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        scrollLeft: 0,
        scrollTop: 0,
        scrollIntoView: ''
        // 触摸时的原点
      };this.touchDot = 0;
      // 定时器
      this.interval = null;
      // 滑动时间间隔
      this.time = 0;
      // 是否已经在滑动
      this.isMoving = false;
      // 最大索引
      this.maxIndex = this.props.tabList.length;
    }
  }, {
    key: "handleClick",
    value: function handleClick(i) {
      if (this.props.scroll && i >= 1) {
        // 标签栏滚动
        var env = _index2.default.getEnv();
        if (env === _index2.default.ENV_TYPE.WEAPP) {
          // 小程序环境
          this.setState({
            scrollIntoView: "tab" + (i - 1)
          });
        } else if (env === _index2.default.ENV_TYPE.WEB) {
          // web环境
          var prevTabItem = this.refs.refTabHeader.vnode.dom.childNodes[i - 1];
          this.setState({
            scrollTop: prevTabItem.offsetTop,
            scrollLeft: prevTabItem.offsetLeft
          });
        }
      }
      this.__triggerPropsFn("onClick", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      var _this2 = this;

      if (!this.props.swipeable || this.props.tabDirection === 'vertical') {
        return;
      } // 获取触摸时的原点
      this.touchDot = e.touches[0].pageX;
      // 使用js计时器记录时间
      this.interval = setInterval(function () {
        _this2.time++;
      }, 100);
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      if (!this.props.swipeable || this.props.tabDirection === 'vertical') {
        return;
      }var current = this.props.current;

      var touchMove = e.touches[0].pageX;
      var moveDistance = touchMove - this.touchDot;

      if (!this.isMoving && this.time < 10) {
        // 向左滑动
        if (current + 1 < this.maxIndex && moveDistance <= -40) {
          this.isMoving = true;
          this.handleClick(current + 1);

          // 向右滑动
        } else if (current - 1 >= 0 && moveDistance >= 40) {
          this.isMoving = true;
          this.handleClick(current - 1);
        }
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      if (!this.props.swipeable || this.props.tabDirection === 'vertical') {
        return;
      }clearInterval(this.interval);
      this.time = 0;
      this.isMoving = false;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _props = this.__props,
          customStyle = _props.customStyle,
          className = _props.className,
          height = _props.height,
          tabDirection = _props.tabDirection,
          animated = _props.animated,
          tabList = _props.tabList,
          scroll = _props.scroll,
          current = _props.current;
      var _state = this.__state,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop,
          scrollIntoView = _state.scrollIntoView;


      var heightStyle = { height: height };
      var underlineStyle = {
        height: tabDirection === 'vertical' ? tabList.length * 100 + "%" : '1PX',
        width: tabDirection === 'horizontal' ? tabList.length * 100 + "%" : '1PX'
      };
      var bodyStyle = {};
      if (tabDirection === 'horizontal') {
        var transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
        bodyStyle.transform = transformStyle;
        bodyStyle['-webkit-transform'] = transformStyle;
      } else {
        var _transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";
        bodyStyle.transform = _transformStyle;
        bodyStyle['-webkit-transform'] = _transformStyle;
      }
      if (!animated) {
        bodyStyle.transition = 'unset';
      }

      var anonymousState__temp3 = (0, _index6.default)({
        'at-tabs': true,
        'at-tabs--vertical': tabDirection === 'vertical'
      }, className);
      var anonymousState__temp4 = (0, _index.internal_inline_style)(this.mergeStyle(heightStyle, customStyle));
      var anonymousState__temp5 = scroll ? (0, _index6.default)({
        'at-tabs__header': true,
        'at-tabs__header--scroll': scroll
      }) : null;
      var anonymousState__temp6 = scroll ? (0, _index.internal_inline_style)(heightStyle) : null;
      var anonymousState__temp7 = (0, _index6.default)({
        'at-tabs__header': true,
        'at-tabs__header--scroll': scroll
      });
      var anonymousState__temp8 = (0, _index.internal_inline_style)(this.mergeStyle(bodyStyle, heightStyle));
      var anonymousState__temp9 = (0, _index.internal_inline_style)(underlineStyle);
      var loopArray0 = tabList.map(function (item, i) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp2 = (0, _index6.default)({
          'at-tabs__item': true,
          'at-tabs__item--active': current === i
        });
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        loopArray0: loopArray0,
        tabList: tabList,
        scroll: scroll,
        tabDirection: tabDirection
      });
      return this.__state;
    }
  }]);

  return AtTabs;
}(_component2.default), _class.properties = {
  "tabList": {
    "type": null,
    "value": null
  },
  "scroll": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "swipeable": {
    "type": null,
    "value": null
  },
  "tabDirection": {
    "type": null,
    "value": null
  },
  "current": {
    "type": null,
    "value": null
  },
  "customStyle": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "height": {
    "type": null,
    "value": null
  },
  "animated": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleClick", "handleTouchStart", "handleTouchEnd", "handleTouchMove"], _class.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  onClick: function onClick() {}
}, _class.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  height: _index4.default.string,
  tabDirection: _index4.default.oneOf(['horizontal', 'vertical']),
  current: _index4.default.number,
  swipeable: _index4.default.bool,
  scroll: _index4.default.bool,
  animated: _index4.default.bool,
  tabList: _index4.default.array,
  onClick: _index4.default.func
}, _temp2);
exports.default = AtTabs;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtTabs));