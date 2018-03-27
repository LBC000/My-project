import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch, NavLink} from 'react-router-dom'

import './home.css'

class Home extends Component {
    render() { 
        return ( 
            <div id="home" >
                {this.props.children}
            </div>
         )
    }
}
 
export default Home;