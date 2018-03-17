import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './playPage.css'
import Ajax from '../../js/ajax_1.0'

import Window from '../window/window';
import PlayMusic from '../playMusic/playMusic';
import MusicTitle from '../musicTitle/musicTitle';
import Open_down from '../open_down/open_down';
import ClickPlay from '../playMusic/clickPlay/clickPlay';

class PlayPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pageAl:null,
            play_pause:true,
         }
    }

    componentDidMount(){
        let _this = this;
        let id = 281951;
        Ajax({
            url:`http://localhost:4000/song/detail?ids=${id}`,
            data:{
                // limit:30
            },
            success:function(data){
                _this.setState({
                    pageAl:data.songs[0].al
                })
            }
        })
        
    }

    render() {
        //html的字体大小
        let htmlFontSize=getComputedStyle(document.documentElement).fontSize.replace('px','');
        //根据手机的大小减去 头部广告+导航栏的 高度，剩下的是window窗口(隐藏滚动条)的高度
        let phone_h = document.documentElement.clientHeight/htmlFontSize;
        let PlayPage_window_h = phone_h - 1.859375;

        let {picUrl,id} = this.state.pageAl || '' ;
        let clickPlayObj={
            picUrl:picUrl,
            id:id
        }
        console.log(this.state.pageAl)
        // 背景图和播放专辑图用同一张图片
                    // let {playPageData:{bgImg,playMusicData,playMusicData:{musicImg}}}=this.state;
                    // let {img} = url.location.state;

        
        //窗口的宽高，和背景图
        let styles={
            window:{width:'10rem',height:`${PlayPage_window_h}rem`},
            bg:{width:'10rem',height:`${phone_h}rem`, background: `url(${picUrl}) no-repeat`, backgroundSize: `10rem ${phone_h}rem` }
        }
        let h=document.documentElement.clientHeight*2/64;
        return ( 
            <div>
                <Window {...styles} >
                    <PlayMusic>
                        {/* <ClickPlay playMusicData={playMusicData} {...url.location.state} whirl={this.whirl} /> */}
                        <ClickPlay {...clickPlayObj} />
                    </PlayMusic>
                    <MusicTitle styles={ {color: '#fff'} } />
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </Window>
                <Open_down />
            </div>
         )
    }
}
 
export default PlayPage;