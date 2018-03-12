import React, { Component } from 'react'
import '../newMusic/newMusic.css'

import MusicTitle from '../../../musicTitle/musicTitle';
import List from '../../../list/list';

class NewMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <MusicTitle /> 
                <List />
            </div>
         )
    }
}
 
export default NewMusic;