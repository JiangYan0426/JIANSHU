import * as constants from './constants';
import {fromJS} from 'immutable';

// 把js对象转化成immutable对象
const defaultState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});

export default (state=defaultState,action)=>{
    switch(action.type) {
        case constants.SEARCH_FOUCS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            // merge接受一个对象:相当于多次调用set
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case constants.CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            return state; 

    }
}