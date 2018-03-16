import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './recoList.css'

import MusicTitle from '../musicTitle/musicTitle';

class RecoList extends Component {
    render() { 
        let list=this.props.recoListData.map((e,i)=>{
            return <List text={e.text} url={e.img} i={i} key={i} />
        })
        return ( 
            <ul id="recoList">
                <MusicTitle />
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