import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { Globalstyled } from "./style";
import Header from './common/header';
import store from './store';
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 意思是Provider里面的都可以用store */}
        <Provider store={store}>
          <Header/>
          {/* injectGlobal问题的解决，不可删 */}
          <Globalstyled/> 
        </Provider>
      </div>
    )
  }
}
