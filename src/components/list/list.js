import Taro, {Component} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import PropTypes from 'prop-types'
import './list.css'
//列表组件
export default class List extends Component{
    constructor(){
        super(...arguments)
        this.state={
            style:{

            }
        }
    }

    componentWillMount(){
        const {color,background} = this.props
        console.log(this.props,'props')
        if(this.props.title){
            this.setState({
                style:{
                    color:color,
                    backgroundColor:background
                }
            })
        }
    }

    //去详情
    detail(e){
        if(e._relatedInfo.anchorTargetText==='九点起床！'){
            Taro.navigateTo({
                url:'/pages/resume/resume'
            })
        }
    }

    render(){
        let jt = null
        if(this.props.content==='九点起床！'){
            jt = <View className style='height:48px;line-height:48px;color:#ddd;margin-right:8px'>></View>
        }else{
            jt = <View style='width:14px;height:48px;line-height:48px'></View>
        }
        return(
            <View className='list' onClick={this.detail}>
                <View className='list.title'>{this.props.title}</View>
                <View className='list.content' style={this.state.style}>{this.props.content}</View>
                <View >{jt}</View>
            </View>
        )
    }
}
List.defaultProps = {
    title:'',
    content:''
  };
List.PropTypes = {
    title:PropTypes.string,
    content:PropTypes.string
}