import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './recommend.css'
import '../../../css/hide_scroll_bar.css'

import MusicList from '../recommend/musicList/musicList';
import NewMusic from '../recommend/newMusic/newMusic';
import RecoFooter from '../recommend/recoFooter/recoFooter';

class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="recommend" className="hideScrollBar">
                <ul>
                    <li><MusicList /></li>
                    <li><NewMusic /></li>
                    <li><RecoFooter /></li>
                </ul>
            </div>
         )
    }
}
 
export default Recommend;