import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './playPage.css'

import List from '../list/list';
import MusicTitle from '../musicTitle/musicTitle';
import Open_down from '../open_down/open_down';
import PlayMusic from '../playMusic/playMusic';

class PlayPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            play_pause:true,
         }
    }

    render(match) {
        let h=document.documentElement.clientHeight*2/64;
        console.log(this.props)
        return ( 
            <Route path='/m/play/playPage/' render={(url)=>{
                //解构Link to传过来的数据
                let {img}=url.location.state;
                //打开、下载背景图片 
                let obj={
                    bg:{
                        width: '10rem',
                        height: `${h}rem`,
                        filter: 'blur(10px) sepia(50%)',
                        background:`url(${(img)}) no-repeat`,
                        backgroundSize:`10rem ${h}rem`,
                        position: 'absolute',
                        bottom: '0',
                    }
                } 
                //背景图片
                let boxBg={
                        width: '10rem',
                        height: `${h}rem`,
                        filter: 'blur(10px) sepia(50%)',
                        background:`url(${(img)}) no-repeat`,
                        backgroundSize:`10rem ${h}rem`,
                        position: 'absolute',
                        bottom: '0',
                        zIndex: '-1'
                    }

                return (
                    <div id="playPage">
                        <div style={boxBg}></div>
                        <PlayMusic />
                        <MusicTitle />
                        <Open_down {...obj}/>
                    </div>
                )
            }} />
         )
    }
}
 
export default PlayPage;