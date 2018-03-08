import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './nav.css'

import Window from '../window/window';
import Recommend from '../window/recommend/recommend';
import Hot from '../window/hot/hot';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navData:{
                btn1:'推荐音乐',
                btn2:'热歌榜',
                btn3:'搜索'
            }
         }
    }
    render() { 
        let {navData:{btn1,btn2,btn3}}=this.state;
        return ( 
            <div>
                <ul id="nav">
                    <li>
                        <div className="active"><Link to='/Recommend'>{btn1}</Link></div>
                    </li>
                    <li>
                        <div className="active"><Link to='/Hot'>{btn2}</Link></div>
                    </li>
                    <li>
                        <div ><Link to='/'>{btn3}</Link></div>
                    </li>
                </ul>
            </div>
         )
    }
}
 
export default Nav;