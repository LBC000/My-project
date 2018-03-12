import React, { Component } from 'react'

import './clickPlay.css'

class ClickPlay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            musicData:{
                // url:'http://music.163.com/song/media/outer/url?id=451703096.mp3'
                url:require('../../../music_file/111.mp3'),
                musicImg:require('../../../img/109951163097632993.webp')
            },
            num:0,
            Onoff:true,
         }
    }

    //播放
    play=()=>{
        let myAudio=this.refs.myAudio;
        let {Onoff}=this.state;
        
        if(Onoff){
            myAudio.play();
        }else{
            myAudio.pause();
        }
    }

    componentDidMount() {
        clearInterval(this.timer)
    }

    //播放旋转
    clickPlay=()=>{
        this.play()
        let {Onoff,num}=this.state;
        let {clickPlay,playIcon}=this.refs;      /* 获取元素 */

        if(Onoff){
            this.timer=setInterval(()=>{
                num++
                num%=360
                clickPlay.style.transform=`rotate(${num}deg)`; /* 旋转元素 */
                this.setState({
                    num
                })
            },50)
            playIcon.style.display='none';
        }else{
            clearInterval(this.timer)
            playIcon.style.display='block';
        } 
        this.setState({
            Onoff:!Onoff
        }) 
    }

    render() { 
        let {Onoff}=this.state;   //解构自己的数据
        let {img,url}=this.props.url.location.state; //解构父级传进来的数据
        return ( 
            <div className="clickPlayBox">
                <div id="clickPlay" ref="clickPlay" onTouchStart={this.clickPlay}>
                    <audio 
                        // controls="controls"
                        ref='myAudio'
                    >
                        <source src={url}/>
                    </audio>
                    
                    <div className="disc"></div>
                    <div className="disc_default"></div> {/* 没加载专辑图片时用这张图当底片 */}
                    <img src={img} className="musicImg" alt=""/> {/* 专辑/歌曲图 */}
                </div>
                <i ref='playIcon' className="clickPlayIcon"></i> {/* 播放点击,不跟随旋转 */}
            </div>
            
         )
    }
}
 
export default ClickPlay;