import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import { Globalstyled } from "./style";
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 意思是Provider里面的都可以用store */}
        <Provider store={store}>
          <Header/>
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>

          </BrowserRouter>
          {/* injectGlobal问题的解决，不可删 */}
          <Globalstyled/> 
        </Provider>
      </div>
    )
  }
}
