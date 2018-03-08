import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './/playPage.css'

import List from '../list/list';
import Open_down from '../open_down/open_down';
import PlayMusic from '../playMusic/playMusic';

class PlayPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            play_pause:true,
            musicData:{
                // url:'http://music.163.com/song/media/outer/url?id=451703096.mp3'
                url:require('../../music_file/111.mp3'),
                img:require('../../img/109951163081971963.webp')
            }
         }
    }

    playClick=()=>{
        let myAudio=this.refs.myAudio;
        let {play_pause}=this.state;
        
        if(play_pause){
            myAudio.play();
        }else{
            myAudio.pause();
        }
        this.setState({ 
            play_pause:!play_pause
        });
    }

    render() {
        let {musicData:{url,img}}=this.state;
        let {height}=this.props;
        return ( 
            <div id="playMusic">
                <PlayMusic />
                <audio 
                    // controls="controls"
                    ref='myAudio'
                >
                    <source src={url}/>
                </audio>
                <button
                    onTouchStart={this.playClick}
                >播放/暂停</button>
                <Open_down />
                <List />
                <List />
                <List />
                <List />
                <List />
            </div>
         )
    }
}
 
export default PlayPage;