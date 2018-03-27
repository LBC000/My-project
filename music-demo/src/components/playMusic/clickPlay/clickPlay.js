import React, { Component } from 'react'

import './clickPlay.css'
import Ajax from '../../../js/ajax_1.0';

class ClickPlay extends Component {

    //播放旋转
    clickPlay=()=>{
        console.log(this.props)
        let {Onoff,whirl} = this.props; //解构父级传进来的数据
        let {myAudio,playIcon} = this.refs;      /* 获取元素 */

        let display = Onoff == true ? 'none' : 'block';
        playIcon.style.display = `${display}`;           /* 播放图标显示隐藏 */

        whirl();
        this.play();
    }

    //播放
    play=()=>{
        let {myAudio} = this.refs;      /* 获取元素 */
        let {Onoff} = this.props; //解构父级传进来的数据
        console.log(Onoff)
        if(Onoff){
            myAudio.play();
        }else{
            myAudio.pause();
        }
    }


    //接收到新的props或者state后，进行渲染之前调用
    componentDidUpdate(){
        let {num,Onoff} = this.props; //解构父级传进来的数据
        let {clickPlay} = this.refs;      /* 获取元素 */
        clickPlay.style.transform = `rotate(${num}deg)`; /* 旋转元素 */
    }


    render() { 
        let {picUrl,id}=this.props; //解构父级传进来的数据
        let musicUrl = `http://music.163.com/song/media/outer/url?id=${id}.mp3`;
        
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
                    <img src={picUrl} className="musicImg" alt=""/> {/* 专辑/歌曲图 */}
                </div>
                <i ref='playIcon' className="clickPlayIcon"></i> {/* 播放点击,不跟随旋转 */}
            </div>
            
         )
    }
}
 
export default ClickPlay;