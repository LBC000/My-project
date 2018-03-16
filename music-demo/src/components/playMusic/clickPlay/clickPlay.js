import React, { Component } from 'react'

import './clickPlay.css'

class ClickPlay extends Component {

    //播放旋转
    clickPlay=()=>{
        let {whirl}=this.props; //解构父级传进来的数据
        whirl();
        // this.plat();
    }

    //播放
    play=(Onoff,myAudio)=>{
        if(Onoff){
            myAudio.pause();
        }else{
            myAudio.play();
        }
    }

    // 接收到新的props或者state后，进行渲染之前调用
    componentDidUpdate(){
        let {playMusicData:{num,Onoff}}=this.props; //解构父级传进来的数据
        let {clickPlay,playIcon,myAudio}=this.refs;      /* 获取元素 */
        let display=Onoff==true?'block':'none';
        clickPlay.style.transform=`rotate(${num}deg)`; /* 旋转元素 */
        playIcon.style.display=`${display}`;           /* 播放图标显示隐藏 */
        this.play(Onoff,myAudio);                      /* 播放 */
    }


    render() { 
        let {musicUrl,img}=this.props; //解构父级传进来的数据
        
        return ( 
            <div className="clickPlayBox" onTouchStart={this.clickPlay} >
                <div id="clickPlay" ref="clickPlay">
                    <audio 
                        // controls="controls"
                        ref='myAudio'
                    >
                        <source src={musicUrl}/>
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