import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import PropTypes from 'prop-types'
import './avatar.css'
export default class Avatar extends Component{
        constructor(){
            super(...arguments)
            this.state={
                
            }
        }
        componentWillMount(){
            // let avatar = Taro.getStorageSync('avatarUrl')
            // console.log(avatar,'avatar')
        }
        render(){
            return(
                <View className='avatar'>
                    <View className='avatar-title'>{this.props.title}</View>
                    <View className='avatar-content'>
                       <AtAvatar image='https://wx.qlogo.cn/mmopen/vi_32/ZBqC64Qlc8JXplGgLjlQNyxvcgYmHq8ueWCmU8hFbnqeCLHyufgWfa0eETfmxBL4YdPRIBvROKJBAQbITvopqg/132'
                       circle
                       >
                       </AtAvatar>
                    </View>
                </View>
            )
        }
}


Avatar.defaultProps = {
    title:'',
    content:''
  };
Avatar.PropTypes = {
    title:PropTypes.string,
    content:PropTypes.string
}