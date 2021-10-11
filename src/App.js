import React, { Component } from 'react';
import { Globalstyled } from "./style";
import Header from './common/header';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* injectGlobal问题的解决，不可删 */}
        <Globalstyled/> 
      </div>
    )
  }
}
