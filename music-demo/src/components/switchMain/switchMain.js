import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'

import Recommend from '../window/recommend/recommend';
import Hot from '../window/hot/hot';

class SwitchMain extends Component {
    render() { 
        let {styles}=this.props;
        return ( 
            <Switch>
                <Route exact path='/' component={Recommend} />
                <Route path='/Recommend' component={Recommend} />
                <Route path='/Hot' component={Hot} />
            </Switch>
         )
    }
}
 
export default SwitchMain;