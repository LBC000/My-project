//640*1136设计稿，根字体32px
import React, {Component} from 'react';
import '../css/base.css'
// import '../css/mobile_reset.css'
import '../js/lib-flexible'

import TopBar from './topBar/topBar';
import Nav from './nav/nav';
import Window from './window/window';

class App extends Component {
  render() {
    return (
      <div id="app">
        <TopBar />
        <Nav />
      </div>
    );
  }
}

export default App;
