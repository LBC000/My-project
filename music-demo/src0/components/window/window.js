import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './window.css'

class Window extends Component {
    render() { 
        let {styles,component,boxBg}=this.props;
        return ( 
            <div id="window">
                <div style={boxBg}></div>
                <div className="hideScrollBar" style={styles.box}>
                    {component}
                </div>
            </div>
         )
    }
}
 
export default Window;