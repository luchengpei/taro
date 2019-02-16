import Taro, {Component} from '@tarojs/taro'
import {View,Text,Button} from '@tarojs/components'
import{AtInput,AtToast,AtMessage} from 'taro-ui'
import {connect} from '@tarojs/redux'
import{add,minus,asyncAdd} from '../../actions/counter'
@connect(({counter}) => ({
    counter
  }), (dispatch) => ({
    add () {
      dispatch(add())
    },
    dec () {
      dispatch(minus())
    },
    asyncAdd () {
      dispatch(asyncAdd())
    }
  }))
//登陆页面
export default class Login extends Component{
    config = {
        navigationBarTitleText: '登陆'
      }
    constructor(){
        super(...arguments)
        this.state={
            account:'',
            password:'',
            tip:false,
            is_loading:false
        }
    }
    //账号检测
    account_check(val){
        this.setState({
            account:val,
            tip:false
        })
    }
    //密码检测
    password_check(val){
        this.setState({
            password:val,
            tip:false
        })
    }
    //没有账号去注册
    to_register(){
        Taro.navigateTo({
            url:'/pages/register/register'
        })
    }
    //忘记密码
    forget(){
        Taro.atMessage({
            'message':'忘记密码，还登陆尼玛呢',
            'type':'warning'
        })
    }
    //登陆
    to_login(){
        this.props.add()
       let storateAccount = JSON.parse(Taro.getStorageSync('account'))
       let storatePassword = JSON.parse(Taro.getStorageSync('password'))
       if(!!this.state.account&&!!this.state.password){
           if(this.state.account!==storateAccount||this.state.password!==storatePassword){
                this.setState({
                    tip:true
                })
           }else{
                this.setState({
                    is_loading:true
                },()=>{
                    setTimeout(()=>{
                        Taro.navigateTo({
                            url:`/pages/index/index`
                        })
                    },2000)
                })
           }
       }else if(!this.state.account||!this.state.password){
          Taro.atMessage({
              'message':'请输入账号密码',
              'type':'warning'
          })
       }
    }
    componentWillMount(){
        console.log(this.$router.params,'router');
        Taro.login({
            success(){
              Taro.getUserInfo({
                  success(res){
                      const {avatarUrl,city,country,nickName,province} = res.userInfo
                      Taro.setStorageSync('avatarUrl',JSON.stringify(avatarUrl))
                      Taro.setStorageSync('city',JSON.stringify(city))
                      Taro.setStorageSync('country',JSON.stringify(country))
                      Taro.setStorageSync('nickName',JSON.stringify(nickName))
                      Taro.setStorageSync('province',JSON.stringify(province))
                  }
              })
            }
        })
    }
    render(){
        return(
            <View className='login'>
                <View className='img'>
                    <Image src={require('../../image/login.jpg')} className='login_img'></Image>
                </View>
                <View className='form'>
                    <AtInput
                    title='账号'
                    type='text'
                    placeholder='请输入手机号码或者账号'
                    value={this.state.account}
                    onChange={this.account_check}
                    />
                    <AtInput
                    type='password'
                    title='密码'
                    placeholder='请输入密码'
                    value={this.password}
                    onChange={this.password_check}
                    />
                    <Button className='login_btn' type='primary' onClick={this.to_login}
                    style={{marginTop:'4px',marginBottom:'4px'}}
                    >
                    登陆{this.props.counter.num}
                    </Button>
                </View>
                <View className='footer'>
                    <Text className='left' onClick={this.forget}>忘记密码</Text>
                    <Text className='right' onClick={this.to_register}>没有账号？去注册!!!</Text>
                </View>
                <AtToast text='账号密码不正确' status='error' isOpened={this.tip}></AtToast>
                <AtToast text='拼命加载ing...' status='loading' isOpened={this.is_loading}></AtToast>
                <AtMessage className='message'/>
            </View>
        )
    }
}