import { createStore, compose} from 'redux';
import reducer  from './reducer';
// 图书管理员阿姨需要一个手册：reducer来学习管理

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducer,composeEnhancers());

export default store;
