const INITIAL_STATE ={
    num:0
}
//这里的state 可以默认给个空 这里随便 看情况看自己
export default function counter (state =INITIAL_STATE,action){
    console.log(action,'reducer')
    switch(action.type) {
        case 'ADD':
         return{
             ...state,
             num:state.num+1//这个是你想返回什么数据
         }
         case 'MINUS':
          return{
              ...state,
              num:state.num-1
          }
          default:
           return state
    }
}