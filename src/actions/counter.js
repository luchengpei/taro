import {
    ADD,
    MINUS
} from '../constants/counter'
export const add =()=>{
    return{
        type:ADD,
        data:'add'
    }
}
export const minus = ()=>{
    return {
        type:MINUS,
        data:'minus'
    }
}
export function asyncAdd(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add())
        },2000)
    }
}