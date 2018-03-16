import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './playPage.css'

// import List from '../list/list';
// import MusicTitle from '../musicTitle/musicTitle';
// import Open_down from '../open_down/open_down';
// import PlayMusic from '../playMusic/playMusic';
// import Comment from '../comment/comment';

class PlayPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            play_pause:true,
         }
    }

    render() {
        let h=document.documentElement.clientHeight*2/64;
        return ( 
            <div>
                {this.props.children}
            </div>
         )
    }
}
 
export default PlayPage;