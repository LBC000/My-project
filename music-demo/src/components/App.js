//640*1136设计稿，根字体32px
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import '../css/base.css'
import '../js/lib-flexible'

import Home from './home/home';
import Window from './window/window';
import PlayPage from './playPage/playPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            play_pause:true,
            musicData:{
                // url:'http://music.163.com/song/media/outer/url?id=451703096.mp3'
                url:require('../music_file/111.mp3'),
                img:require('../img/109951163097632993.webp')
            }
         }
    }
    render() {
        let {musicData:{url,img}}=this.state;
        console.log(img);
        //窗口的样式 + playMusic组件
        let obj={
            styles:{
                box:{
                    height:'100%',
                }
            },
            component:<PlayPage />
        }
        return (
            <div id="app">
                <Switch>
                    {/* 把PlayPage页面放在上面。只要匹配了一个就不会往下执行 */}
                    <Route path='/m/play' render={(math)=>{
                        return <Window {...obj} />
                    }} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;
