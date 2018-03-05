import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './nav.css'

import Window from '../window/window';
import Recommend from '../window/recommend/recommend';
import Hot from '../window/hot/hot';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <ul id="nav">
                    <li>
                        <div className="active"><Link to='/Recommend'>推荐音乐</Link></div>
                    </li>
                    <li>
                        <div className="active"><Link to='/Hot'>热歌榜</Link></div>
                    </li>
                    <li>
                        <div ><Link to='/'>搜索</Link></div>
                    </li>
                </ul>
                <Route path='/' component={Window} />
            </div>
            
         )
    }
}
 
export default Nav;