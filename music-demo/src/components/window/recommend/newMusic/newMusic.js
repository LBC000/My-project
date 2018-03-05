import React, { Component } from 'react'
import '../musicTitle/musicTitle.css'

import MusicTitle from '../musicTitle/musicTitle';
import NewMusicList from './newMusicList/newMusicList';

class NewMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <MusicTitle /> 
                <NewMusicList />
            </div>
         )
    }
}
 
export default NewMusic;