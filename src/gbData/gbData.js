const globalData = {
    avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/ZBqC64Qlc8JXplGgLjlQNyxvcgYmHq8ueWCmU8hFbnqeCLHyufgWfa0eETfmxBL4YdPRIBvROKJBAQbITvopqg/132",
    city:'Maoming',
    country:'China',
    nickName:'别问,问就是天赋',
    province:'Guangdong'
}
export function set(key,val){
    globalData[key]=val
}
export function get(key){
    return globalData[key]
}