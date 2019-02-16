import Taro, { Component } from '@tarojs/taro'
import {View,Text,Swiper,SwiperItem} from '@tarojs/components'
import './around.css'
export default class Around extends Component {

    //随便玩玩页面
    config = {
        navigationBarTitleText: '随便玩玩'
      }
    constructor(props){
        super(props)
        this.state={
            img:[
                {img:require('../../image/1.jpg')},
                {img:require('../../image/2.jpg')},
                {img:require('../../image/3.jpg')}
              ],
              idx:null,
        }
    }
    change=(val)=>{
        this.setState({
            idx:val.detail.current,
          })
    }
    componentWillMount () {
        
       }
    render(){
        const isTurn = this.state.img.length!==0
        let imgList = null
        if(isTurn){
        imgList = this.state.img.map(k=>{
            return <SwiperItem key={k.img}>
                    <Image style='width:100%;height:100%' src={k.img} ></Image>
                </SwiperItem>
        })
        }else{
        imgList = <Text>么有</Text>
        }
        let currentPage = null
        if(this.state.idx==0){
          currentPage = <View>哈哈猪年大吉，明年本命，希望对我好好的！</View>
        }else if(this.state.idx==1){
          currentPage = <View>2019的期望，技术越来越好，家人身体健康，我开心的工作</View>
        }else{
          currentPage = <View>2019。。。。即将开始</View>
        }
        return(
            <View>
                <Text className='title'>小程序搞起来</Text>
                <Swiper
                className='test-h'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay
                onChange={this.change}
                >
                {imgList}
                </Swiper>
                <View className='cur'>{currentPage}</View>
            </View>
        )
    }
}