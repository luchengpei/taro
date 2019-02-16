import Taro ,{Component} from '@tarojs/taro'
import { View,Audio } from '@tarojs/components';
import {AtForm, AtInput, AtButton,AtMessage,AtToast} from 'taro-ui'
import{set as setGolbalData,get as getGolbalData} from '../../gbData/gbData'
export default class Register extends Component{
    config = {
        navigationBarTitleText: '注册'
      }
      constructor(props){
            super(props)
            this.state={
                account:'',
                password:'',
                phone:'',
                msg:false,
                yzm:this.createCode(),
                code:'',
                isOpened:false,
                is_register:false,
                isOk:false
            }
      }
      hanndelAccount=(val)=>{
          this.setState({
              account:val,
              isOk:false
          })
      }
      handleChange(val){
          this.setState({
              code:val
          })
      }
      //生成验证码
      createCode= ()=>{
        let code = '';
        let random = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
        for(let i =0;i<4;i++){
            let index = Math.floor(Math.random()*36)
            code +=random[index]
        }
        return code
    }
    //刷新验证码
    reset(){
        this.setState({
            yzm:this.createCode()
        })
    }
      onSubmit=()=>{
        if(!!this.state.account.length&&!!this.state.password.length&&!!this.state.phone.length&&this.state.code===this.state.yzm){
            setGolbalData('account',this.state.account)
            setGolbalData('password',this.state.password)
            setGolbalData('phone',this.state.phone)
            Taro.setStorageSync('account',JSON.stringify(this.state.account))
            Taro.setStorageSync('password',JSON.stringify(this.state.password))
            this.setState({
                msg:true,
                phone:this.state.phone,
                password:this.state.password,
                account:this.state.account,
                isOpened:true,
                is_register:true,
            },()=>{
                setTimeout(()=>{
                    Taro.navigateTo({
                        url:`/pages/login/login?account=${this.state.account}&password=${this.state.password}&phone=${this.state.phone}`
                    })
                },2000)
            })
        }else{
            Taro.atMessage({
                'message': '请检查你的注册信息',
                'type': 'error',
                duration:2000
              })
        }
      }
    hanndelPwd=(val)=>{
        this.setState({
            password:val
        })
    }
    hanndelPhone=(val)=>{
        this.setState({
            phone:val
        })
    }
    //注册成功去登陆页面登陆
    click(){
        Taro.redirectTo({
            url:`/pages/login/login?account=${this.state.account}&password=${this.state.password}&phone=${this.state.phone}`
        })
        // if(this.state.is_register){
        //     Taro.navigateTo({
        //         url:`/pages/login/login?account=${this.state.account}&password=${this.state.password}&phone=${this.state.phone}`
        //     })
        // }else{
        //     this.setState({
        //         isOk:true
        //     })
        // }
    }
      render(){
          return(
              <View className='wrap'>
                <Image src={require('../../image/mm.jpg')} className='image'>
                </Image>
                <AtForm
                onSubmit={this.onSubmit}
                >
                    <AtInput value={this.account}
                    type='text'
                    title='账号'
                    placeholder='QQ号/手机号'
                    onChange={this.hanndelAccount}
                    ></AtInput>
                    <AtInput value={this.password}
                    type='password'
                    title='密码'
                    placeholder='密码'
                    onChange={this.hanndelPwd}
                    ></AtInput>
                    <AtInput value={this.phone}
                    type='number'
                    title='手机号'
                    placeholder='手机号'
                    onChange={this.hanndelPhone}
                    ></AtInput>
                    <AtInput
                    clear
                    title='验证码'
                    type='text'
                    maxLength='4'
                    placeholder='验证码'
                    value={this.state.code}
                    onChange={this.handleChange}
                    >
                        <View className='yzm' onClick={this.reset}>{this.state.yzm}</View>
                    </AtInput>
                    <AtMessage />
                    <AtButton formType='submit' className='_sub'>注册</AtButton>
                </AtForm>
                {massage}
                <Text className='text' onClick={this.click}>已有账号，去登陆页面!!!</Text>
                <AtToast isOpened={this.state.isOpened} text="注册成功" status='success'></AtToast>
                <AtToast isOpened={this.state.isOk} text="你还没注册账号" status='error'></AtToast>
              </View>
          )
      }
}