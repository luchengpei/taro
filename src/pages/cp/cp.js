import  taro,{Component} from '@tarojs/taro'
import { Button, View } from '@tarojs/components';
import '../cp/cp.css'
export default class Cp extends Component{
        constructor(props){
            super(props)
            this.state={
                index:0,
                list:[
                    '循环1','循环2','循环3'
                ]
            }
        }
        ck=()=>{
            this.setState({
                index:this.state.index+1
            },()=>{
                console.log(this.state.index)
                this.props.onPack(this.state.index)
            })
        }
        render(){
            return(
                <View>
                    <Button type={this.props.tp} className='btn'
                    onClick={this.ck}
                    >
                
                {this.props.children}</Button>
                    <View>
                        {this.index}
                    </View>
                    <Text className={this.props.cls}>{this.state.list.map(k=>k)}</Text>
                </View>
            )
        }
}