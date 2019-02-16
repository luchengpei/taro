'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.get = get;
var globalData = {
  avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/ZBqC64Qlc8JXplGgLjlQNyxvcgYmHq8ueWCmU8hFbnqeCLHyufgWfa0eETfmxBL4YdPRIBvROKJBAQbITvopqg/132",
  city: 'Maoming',
  country: 'China',
  nickName: '别问,问就是天赋',
  province: 'Guangdong'
};
function set(key, val) {
  globalData[key] = val;
}
function get(key) {
  return globalData[key];
}