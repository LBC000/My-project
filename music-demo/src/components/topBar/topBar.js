import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './topBar.css'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            topBarData:{
                log:require('../../img/topLog.png'),
                downText:'下载APP'
            }
         }
    }
    render() { 
        let {topBarData:{log,downText}}=this.state;
        return ( 
            <div id="topBar">
                <div id="log">
                    <img src={log} />
                </div>
                <div id="down">
                    <Link to='/'>{downText}</Link>
                </div>
            </div>

         )
    }
}
 
export default TopBar;