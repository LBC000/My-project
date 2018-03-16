import React, { Component } from 'react'
import '../newMusic/newMusic.css'

import MusicTitle from '../musicTitle/musicTitle';
import List from '../list/list';

class NewMusic extends Component {
    render() { 
        return ( 
            <div>
                <MusicTitle /> 
                <List newMusicData={this.props.newMusicData} />
            </div>
         )
    }
}
 
export default NewMusic;