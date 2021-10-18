import * as constants from './constants';
import {fromJS} from 'immutable';

// 把js对象转化成immutable对象
const defaultState=fromJS({
    focused:false
});

export default (state=defaultState,action)=>{
    if(action.type===constants.SEARCH_FOUCS){
        // immutable对象的set方法，会结合之前immutable对象的值和设置
        // 的值，返回一个新的对象（是返回而不是改变原来的）
        return state.set('focused',true);
    }
    if(action.type===constants.SEARCH_BLUR){
        return state.set('focused',false);
    }
    return state;
    
}