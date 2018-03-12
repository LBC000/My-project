import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './playMusic.css'

import ClickPlay from '../playMusic/clickPlay/clickPlay';

class PlayMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {
        return ( 
            <Route path='/m/play/playPage/' render={(url)=>{
                return (
                    <div id="playMusic" onTouchStart={this.changePlayOnoff}>
                        <ClickPlay url={url}/>
                    </div>
                )
            }} />
         )
    }
}
 
export default PlayMusic;