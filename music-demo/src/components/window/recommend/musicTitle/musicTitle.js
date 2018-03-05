import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../musicTitle/musicTitle.css'

//标题
class MusicTitle extends Component {
    render() { 
        return ( 
            <div className="title">
                <i></i><span>推荐歌单</span> 
            </div>
         )
    }
}
 
export default MusicTitle;