import * as constants from './constants';

const defaultState={
    focused:false
};

export default (state=defaultState,action)=>{
    if(action.type===constants.SEARCH_FOUCS){
        return {
            focused:true
        }
    }
    if(action.type===constants.SEARCH_BLUR){
        return {
            focused:false
        }
    }
    return state;
    
}