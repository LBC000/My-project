import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './window.css'

import Recommend from './recommend/recommend';
import Hot from './hot/hot';

class Window extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="window">
                <Switch>
                    <Route exact path='/' component={Recommend} />
                    <Route exact path='/Recommend' component={Recommend} />
                    <Route exact path='/Hot' component={Hot} />
                </Switch>
            </div>
         )
    }
}
 
export default Window;