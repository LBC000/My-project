//640*1136设计稿，根字体32px
import React, {Component} from 'react';
import '../css/base.css'
import '../js/lib-flexible'

import TopBar from './topBar/topBar';

class App extends Component {
  render() {
    return (
      <div id="app">
        <TopBar />
      </div>
    );
  }
}

export default App;
