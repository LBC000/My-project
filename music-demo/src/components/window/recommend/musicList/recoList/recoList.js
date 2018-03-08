import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './recoList.css'

import NewMusic from '../../newMusic/newMusic';

class RecoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recoListData:[
                {
                    img:require('../../../../../img/18533367999267309.webp'),
                    text:'华研国际热门音乐精选50首'
                },
                {
                    img:require('../../../../../img/18572950418591275.webp'),
                    text:'【古风】和声即情感，舍此无他'
                },
                {
                    img:require('../../../../../img/109951163081971963.webp'),
                    text:'诗和故事：我弹一曲思念，你...'
                },
                {
                    img:require('../../../../../img/109951163097632993.webp'),
                    text:'2017国际古典音乐大奖提...'
                },
                {
                    img:require('../../../../../img/109951163115144091.webp'),
                    text:'2017年度最热新歌TOP100'
                },
                {
                    img:require('../../../../../img/109951163168289079.webp'),
                    text:'【神秘组织】装X常用BGM'
                }
            ]
         }
    }
    render() { 
        let {recoListData}=this.state;
        let list=recoListData.map((e,i)=>{
            let obj={
                key:i,
                url:e.img,
                text:e.text,
                i
            }
            return <List {...obj}/>
        })
        return ( 
            <ul id="recoList">
                {list}
            </ul>
         )
    }
}

//li结构组件
class List extends Component {
    render() { 
        let {url,i,text}=this.props;
        return ( 
            <li className="mgr">
                <img src={url} alt=""/>
                <p>{text}</p>
            </li>
         )
    }
}

export default RecoList;