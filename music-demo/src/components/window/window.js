import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './window.css'

class Window extends Component {
    render() { 
        let {styles,component}=this.props;
        console.log(styles);
        return ( 
            <div id="window">
                <div className="hideScrollBar" style={styles.box}>
                    <div style={styles.bg}></div>
                    {component}
                </div>
            </div>
         )
    }
}
 
export default Window;