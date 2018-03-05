import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './topBar.css'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="topBar">
                <div id="log">
                    <img src={require('../../img/topLog.png')} />
                </div>
                <div id="down">
                    <Link to='/'>下载APP</Link>
                </div>
            </div>

         )
    }
}
 
export default TopBar;