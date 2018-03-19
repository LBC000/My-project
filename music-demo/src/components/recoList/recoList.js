import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './recoList.css'

import MusicTitle from '../musicTitle/musicTitle';
import Ajax from '../../js/ajax_1.0'

class RecoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recoListData:null
         };
    }

    componentDidMount(){
        let _this = this;
        Ajax({
            url:'http://localhost:4000/personalized',
            data:{
                // limit:30
            },
            success:function(data){
                console.log(data)
                _this.setState({
                    recoListData:data
                })
            }
        })
    }

    render() { 
        let {recoListData} = this.state;
        recoListData ? recoListData.result.length = 6 :'';
        let list= recoListData ? recoListData.result.map((e,i)=>{
            return <List {...e} key={i} />
        }) : '';
        return ( 
            <ul id="recoList">
                <MusicTitle {...{title:'推荐歌单'}} />
                {list}
            </ul>
         )
    }
}

//li结构组件
class List extends Component {
    render() { 
        let {name,picUrl}=this.props;
        return ( 
            <li className="mgr">
                <img src={picUrl} alt=""/>
                <p>{name}</p>
            </li>
         )
    }
}

export default RecoList;