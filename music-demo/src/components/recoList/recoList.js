import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './recoList.css'

import MusicTitle from '../musicTitle/musicTitle';
import axios from 'axios'
import Loading from '../loading/loading'
import CheckInternet from '../checkInternet/checkInternet';

class RecoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recoListData:null,
            error:'',
            loading:true
         };
    }

    componentDidMount(){
        let _this = this;
        axios.get('http://localhost:4000/personalized')
        .then((data)=>{
            _this.setState({
                recoListData:data,
                loading:false
            })
        }).catch((error)=>{
            console.log('数据出错')
            _this.setState({
                error,
                loading:false
            })
        })
    }

    render() { 
        let list = '';
        if(this.state.recoListData){
            let {recoListData:{data:{result}}} = this.state;
            result.length = 6;
            list = result.map((e,i)=>{
                return <List {...e} key={i} />
            });
        }else if(this.state.error){
            list = <CheckInternet />
        }
        //loading
        let html = this.state.loading ? <Loading /> : list ;
        return ( 
            <ul className="recoList">
                <MusicTitle {...{title:'推荐歌单'}} />
                {html}
            </ul>
         )
    }
}

//li结构组件
class List extends Component {
    render() { 
        let {name,picUrl,id}=this.props;
        return ( 
            <Link to={`/PlayList/${id}`} >
                <li className="mgr">
                    <img src={picUrl} alt=""/>
                    <p>{name}</p>
                </li>
            </Link>
         )
    }
}

export default RecoList;