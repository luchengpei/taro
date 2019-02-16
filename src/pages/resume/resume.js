import Taro,{Component} from '@tarojs/taro'
import {View,Text,WebView} from '@tarojs/components'
import{AtIcon,AtAvatar} from 'taro-ui'
import './resume.css'
//个人简历页面
export default class Resume extends Component{
    constructor(){
        super(...arguments)
        this.state={

        }
    }

    config={
        navigationBarTitleText: '个人简历'
    }
    check(){
        console.log(87)
    }
    render(){
        return(
            <View className='resume'>

                <View className='resume-personal-info'>

                    <View className='personal-info-header'>
                        <View className='info-icon' style='margin-top:20px'>
                            <AtIcon value='credit-card' size='30'></AtIcon>
                        </View>
                        <View className='info-text'>
                            <Text style='margin-top:20px'>个人信息(Personal Info)</Text>
                            <View className='img-box'>
                               <AtAvatar image={require('../../image/self.png')} size='large' circle></AtAvatar>
                            </View>
                        </View>
                    </View>

                    <View className='info-content'>
                        <View className='info-content-row'>
                            <Text className='info-left'>姓名:陆城锫</Text>
                            <Text className='info-right'>出生年月:1995.04</Text>
                        </View>
                        <View className='info-content-row'>
                            <Text className='info-left'>民族:汉</Text>
                            <Text className='info-right'>政治面貌:团员</Text>
                        </View>
                        <View className='info-content-row'>
                            <Text className='info-left'>电话:199-273-51936</Text>
                            <Text className='info-right'>住址:广东省茂名市信宜市</Text>
                        </View>
                        <View className='info-content-row'>
                            <Text className='info-left'>邮箱:1191650655@qq.com</Text>
                            <Text className='info-right'>学历:本科(休学)</Text>
                        </View>
                    </View>
                </View> 

                <View className='technical-stack'>
                    
                    <View className='technical-stack-header'>
                        {/* <View className='at-icon at-icon-credit-card'></View> */}
                        <View className='stack-icon'>
                            <AtIcon value='tag' size='30'></AtIcon>
                        </View>
                        <View className='stack-text'>
                            <Text>技术栈(Techincal Stack)</Text>
                        </View>
                    </View>
                    <View className='stack-content'>
                        <View style='color:orange;text-align:center;width:100%'>掌握技能</View>
                        <View>个人GitHub: https://github.com/luchengpei</View>
                        <View style='color:skyblue'>构建工具</View>
                        <Text>熟悉使用webpack构建项目</Text>
                        <View style='color:skyblue'>框架</View>
                        <View className='item'><View style='font-size:30px'>·</View><View>熟悉html css html5 css3 原生js jquery Bootstrap</View></View>
                        <View className='item'><View style='font-size:30px'>·</View><View className='long' style='color:skyblue'>熟悉vue框架 vuex vue-router axios react redex taro框架</View></View>
                        <View className='item'><View style='font-size:30px'>·</View><View>可以使用vue编写基础组件</View></View>
                        <View className='item'><View style='font-size:30px'>·</View><View>熟悉使用element-ui mint-ui taro-ui 等ui框架</View></View>
                        <View className='item'><View style='font-size:30px'>·</View><View>熟悉使用less sass scss stylus 等css预处理</View></View>
                        <View style='color:skyblue'>项目经验</View>
                        <View className='project-experience'>
                            <View className='dot'>·</View>
                            <Text>.....没写完</Text>
                        </View>
                        <View className='test' style='width:100%;height:200px'>
                            <Image src={require('../../image/self.png')} style='width:40%;height:100%' onClick={this.check}></Image>
                        </View>
                    </View>

                    

                </View>               
            </View>
        )
    }
}