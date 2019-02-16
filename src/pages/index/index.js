import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem  } from '@tarojs/components'
import './index.css'
import Cp from '../cp/cp.js'
import Around from '../screwingAround/around.js'
import {AtTabBar,AtTabs, AtTabsPane} from 'taro-ui'
import List from '../../components/list/list'
import Avatar from '../../components/avatar/avatar'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '随便玩玩'
  }
  constructor(props){
      super(props);
      this.state={
        parentParams:'',
        app:Taro.getApp().state.isLogin,
        current:0,
        randomCode:this.createCode(),
        list:[
          {
            title:'昵称',
            content:JSON.parse(Taro.getStorageSync('nickName')),
            color:'orange',
          },
          {
            title:'性别',
            content:'男',
            color:'skyblue',
          },
          {
            title:'出生年月',
            content:'1995-04',
            color:'yellowgreen',
          },
          {
            title:'城市',
            content:`广东茂名`,
            color:'pink'
          }
        ]
      }
  }
  
   createCode= ()=>{
    let code = '';
    let random = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
    for(let i =0;i<4;i++){
        let index = Math.floor(Math.random()*36)
        code +=random[index]
    }
    return code
}
  Pack=(val)=>{
    // console.log('parent',777);
    // console.log('child params',val)
    this.setState({
      parentParams:val,
    });
    //console.log(this.state.img,'xx')
  }
  handleClick= (val)=>{
    this.setState({
      current:val,
      randomCode:this.createCode()
    },()=>{
      console.log(this.state.randomCode,'987')
      switch(this.state.current){
        case 0:
          Taro.setNavigationBarTitle({
              title:'随便玩下'
            });
        break;
        case 1:
          Taro.setNavigationBarTitle({
            title:'个人中心'
          });
        break;
      }
    })
  }
  componentWillMount () {
    console.log(Taro.getApp().state,'willMout')
    Taro.showNavigationBarLoading()
   }
  componentDidMount () { 
    console.log(this.state.randomCode,'90')
    Taro.hideNavigationBarLoading()
        Taro.login({
            success(){
              Taro.getUserInfo({
                  success(res){
                      console.log(res,'xx')
                  }
              })
            }
        })
    }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

     //
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }]
    

    return (
      <View>
        <AtTabBar
        fixed
        tabList={[
        { title: '随便玩下', iconType: 'bullet-list', text: 'new' },
        { title: '我的', iconType: 'user' }
        ]}
        onClick={this.handleClick}
        current={this.state.current}
        />
        <AtTabs current={this.state.current} >
        <AtTabsPane current={this.state.current} index={0} >
            <View className='index'>
              <Around/>
            <Cp tp='text' onPack={this.Pack} cls='pk' className='child'>按钮</Cp>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View className='self'>
            <View className='self-box'>
              <Image src={require('../../image/smlz.png')} className='image'></Image>
            </View>

            <View className='avatar'>
               <Avatar title='头像'></Avatar>
            </View>

            <View className='list'>
                {this.state.list.map((item,index)=>{
                  return (
                    <List title={item.title}
                    content={item.content}
                    color={item.color}
                    background={item.background}
                    key={index}
                    avatar={item.avatar}
                    >
                    </List>
                  )
                })}
            </View>
          </View>
        </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

