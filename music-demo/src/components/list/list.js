import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './list.css'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            musicData:[
                {
                    musicnName:'Alive',
                    details:'Do As Infinity - ALIVE',
                    RouteID:'1Alive',
                    img:require('../../img/109951163081971963.webp'),
                    url:require('../../music_file/111.mp3')
                },
                {
                    musicnName:'La La La',
                    details:'Weki Meki',
                    RouteID:'2La La La',
                    img:require('../../img/109951163097632993.webp'),
                    url:require('../../music_file/王妃dj版-萧敬腾-激情中文秒下不解释.mp3')
                },
                {
                    musicnName:'La La La',
                    details:'Weki Meki',
                    RouteID:'3La La La',
                    img:require('../../img/109951163115144091.webp'),
                    url:require('../../music_file/王妃dj版-萧敬腾-激情中文秒下不解释.mp3')
                }
            ]
         }
    }
    render() { 
        let {musicData}=this.state;
        let list=musicData.map((e,i)=>{
            let obj={
                key:i,
                musicnName:e.musicnName,
                details:e.details,
                RouteID:e.RouteID,
                img:e.img,
                url:e.url
            }
            return <MList {...obj}/>
        })
        return ( 
            <ul className="MusicList">
                {list}
            </ul>
         )
    }
}

//li结构组件
class MList extends Component {
    render() { 
        let {musicnName,details,RouteID,img,url}=this.props;
        console.log(this.props)
        return ( 
            /* Link to 把数据传给匹配/m/play/的页面 */
            <Link to={{pathname:`/m/play/playPage/}`,state:this.props}}>
                <li>
                    <p>{musicnName}</p>
                    <span>
                        <i></i>
                        {details}          {/*详情*/}
                    </span>
                    <i id="newM_Playicon"></i>
                </li>
            </Link>
         )
    }
}

export default List;