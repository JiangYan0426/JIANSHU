import * as constants from './constants';
import {fromJS} from 'immutable';

// 把js对象转化成immutable对象
const defaultState=fromJS({
    focused:false,
    list:[]
});

export default (state=defaultState,action)=>{
    switch(action.type) {
        case constants.SEARCH_FOUCS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.set('list',action.data);
        default:
            return state; 

    }
}