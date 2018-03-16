import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './playMusic.css'

import ClickPlay from '../playMusic/clickPlay/clickPlay';

class PlayMusic extends Component {
    render() {
        // onTouchStart
        return ( 
            <div id="playMusic">
                {this.props.children}
            </div>
         )
    }
}
 
export default PlayMusic;