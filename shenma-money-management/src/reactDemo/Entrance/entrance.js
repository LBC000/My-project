import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Start from '../Start page/start-page'
import Home from '../Home/Home'
import Invest from '../Invest/invest'
import Find from '../Find/Find'
import Me from '../Me/Me'
import Nav from '../nav/nav'

class Entrance extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div>
                <Route exact path='/' component={Start}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Invest" component={Invest}/>
                <Route path="/Find" component={Find}/>
                <Route path="/Me" component={Me}/>
                <Nav/>
            </div>
        )
    }
}
export default Entrance