import Taro,{Component} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import { AtImagePicker } from 'taro-ui'
import Dialog from '../dialog/dialog'
let qs = require('querystring')
//相册页面组件
import './album.scss'
export default class Album extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            time:JSON.parse(JSON.stringify(this.getTime())),
            files: [{
                url: require('../../image/ts1.png'),
              },
              {
                url: require('../../image/ts2.png'),
              },
              {
                url: require('../../image/self.png'),
              }],
              isClick:false,
              src:'',
        }
    }
    getTime(){
        let date = new Date()
        let month =date.getMonth()+1
        let day = date.getDate()
        return `${month}月${day}日`
    }
    onChange(files){
        this.setState({
            files
        })
    }
    onImageClick(index,files,e){
        let cloneFiles = JSON.stringify(this.state.files)
        // return
        Taro.navigateTo({
            url:`/components/dialog/dialog?src=${files.url}&files=${cloneFiles}`
        })
        this.setState({
            isClick:true,
            src:files.url
        })
    }
    render(){
        return(
            <View className='album'>
                <Text className='title'>test:</Text>
                <Text className='time'>{this.state.time}</Text>
                <View className='test'>
                    <AtImagePicker
                    className={`test ${this.state.isClick?'active':''}`}
                    files={this.state.files}
                    onChange={this.onChange}
                    showAddBtn
                    onImageClick={this.onImageClick}
                    multiple
                    />
                </View>
                {/* <View className='img-box'>
                    <Image src={this.state.src} className='img'></Image>
                </View> */}
                {/* <View style='width:100%;height:100%'>
                    <Dialog/>
                </View> */}
            </View>
        )
    }
}