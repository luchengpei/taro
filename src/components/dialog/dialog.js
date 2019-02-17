import Taro,{Component} from '@tarojs/taro'
import {View,Text,Button,Swiper,SwiperItem} from '@tarojs/components'

//dialog弹框组件
import './dialog.scss'
export default class Dialog extends Component{
    constructor(){
        super(...arguments)
        this.state={
            src:'',
            style:{},
            files:[],
            swiper:{
                display:'none'
            }
        }
    }
    config={
        navigationBarTitleText: '记录我的生活！'
    }
    componentWillMount(){
        // console.log(this.$router.params.files,'params')
        this.setState({
            src:this.$router.params.src,
            files:JSON.parse(this.$router.params.files)
        })
    }
    goBack(){
        Taro.navigateBack({
            delta:1
        })
    }
    change(){
        this.setState({
            style:{
                display:'none'
            },
            swiper:{
                display:'block',
                transition:'all 1s' 
            }
        })
    }
    render(){
        return(
            <View className='dialog'>
                <View className='modal-content'>
                    <View className='modal-header'>
                        <View className='title'>下面都是帅哥美女</View>
                        <View className='close' onClick={this.goBack}>x</View>
                    </View>
                    <View className='modal-body'>
                        {/* <View className='content'>原生小程序模态框</View> */}
                        <View className='img-box' onClick={this.change}>
                            <Image className='img' src={this.state.src}
                            style={this.state.style}
                            >
                            </Image>
                            <Swiper style={this.state.swiper}
                            className='swiper'
                            circular
                            autoplay
                            >
                                {this.state.files.map((item,index)=>{
                                    return(
                                        <SwiperItem key={index} className='swiper-item'>
                                            <Image src={item.url} className='swiper-img'></Image>
                                        </SwiperItem>
                                    )
                                })}
                            </Swiper>
                        </View>
                    </View>
                    {/* <View className='modal-footer'>
                        <Button className='cannel' size='mini'>取消</Button>
                        <Button className='sure' size='mini'>确定</Button>
                    </View> */}
                </View>
            </View>
        )
    }
}