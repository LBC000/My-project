import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './playPage.css'
import Ajax from '../../js/ajax_1.0'

import Window from '../window/window';
import PlayMusic from '../playMusic/playMusic';
import MusicTitle from '../musicTitle/musicTitle';
import Open_down from '../open_down/open_down';
import ClickPlay from '../playMusic/clickPlay/clickPlay';
import Comment from '../comment/comment';

class PlayPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pageData:'',
            num:0,
            Onoff:true,
            id:props.match.params.id
         }
    }

    //播放页旋转
    whirl=()=>{
        let {Onoff,num}=this.state;
        if(Onoff){
            this.timer=setInterval(()=>{
                num++
                num%=360
                this.setState({
                    num
                }) 
            },50)
        }else{
            clearInterval(this.timer)
        } 
        //Onoff取反
        this.setState({
            Onoff:!Onoff
        }) 
    }

    //获取数据
    componentWillMount(){
        let _this = this;
        let id = this.state.id;
        Ajax({
            url:`http://localhost:4000/song/detail?ids=${id}`,
            data:{
                // limit:30
            },
            success:function(data){
                _this.setState({
                    pageData:data
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

        // 没数据走默认(空)
        let clickPlayObj = {picUrl:'',id:this.state.id}
        // 有数据走数据
        if(this.state.pageData){
            let {id,al:{picUrl}} = this.state.pageData.songs[0];
            clickPlayObj.picUrl = picUrl;
            clickPlayObj.num = this.state.num;
            clickPlayObj.Onoff = this.state.Onoff;
            clickPlayObj.whirl = this.whirl;        //旋转
        }
        
        //窗口的宽高，和背景图
        let styles={
            window:{width:'10rem',height:`${PlayPage_window_h}rem`},
            bg:{width:'10rem',height:`${phone_h}rem`, background: `url(${clickPlayObj.picUrl}) no-repeat`, backgroundSize: `10rem ${phone_h}rem` },
            bg1:{width:'10rem',height:`${phone_h}rem`,backgroundColor: 'rgba(0,0,0,0.7)' }
        }
        let h=document.documentElement.clientHeight*2/64;
        return ( 
            <div>
                <Window {...styles} >
                    <PlayMusic>
                        {/* <ClickPlay playMusicData={playMusicData} {...url.location.state} whirl={this.whirl} /> */}
                        <ClickPlay {...clickPlayObj} />
                    </PlayMusic>
                    <MusicTitle title={'精彩评论'} styles={ {color: '#fff'} } />
                    <Comment id={this.state.id} />
                </Window>
                <Open_down />
            </div>
         )
    }
}
 
export default PlayPage;