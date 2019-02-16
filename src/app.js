import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import {Provider} from '@tarojs/redux'
import configStore from './store'
import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore()
class App extends Component {
  state = {
    isLogin:false,
    account:'',
    password:'',
    phone:''
  }
  config = {
    pages: [
      'pages/login/login',
      'pages/index/index',
      
      'pages/register/register',
      'pages/resume/resume'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh:true
    }
  }

  componentDidMount () {
    //console.log(store,'99')
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index  />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
