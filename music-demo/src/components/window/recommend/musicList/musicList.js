import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../musicList/musicList.css'

import MusicTitle from '../../../musicTitle/musicTitle';
import RecoList from '../musicList/recoList/recoList';
import NewMusic from '../newMusic/newMusic';

class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="musicList">
                <MusicTitle />
                <RecoList />
            </div>
         )
    }
}

export default MusicList;