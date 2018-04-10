import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as urlActions from '../../actionCeators/urlActions';
import * as actions from '../../actionCeators/actionCeators';

import './recoList.css'

import MusicTitle from '../musicTitle/musicTitle';
import axios from 'axios';
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
        let { actions, urlActions } = this.props;
        actions.axios_data(urlActions.upDataRecolist)
        
        
        // let _this = this;
        // axios.get('http://localhost:4000/personalized')
        // .then((data)=>{
        //     _this.setState({
        //         recoListData:data,
        //         loading:false
        //     })
        // }).catch((error)=>{
        //     console.log('数据出错')
        //     _this.setState({
        //         error,
        //         loading:false
        //     })
        // })
    }

    render() { 
        console.log(this.props.recoListData)
        let list = '';
        if(this.props.recoListData){
            let {recoListData:{data:{result}}} = this.props;
            result.length = 6;
            list = result.map((e,i)=>{
                return <List {...e} key={i} />
            });
        }
        // else if(this.state.error){
        //     list = <CheckInternet />
        // }
        console.log(list)
        //loading
        // let html = this.state.loading ? <Loading /> : list ;
        return ( 
            <ul className="recoList">
                <MusicTitle {...{title:'推荐歌单'}} />
                {list}
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

function mapStateToProps(state) {
    return {
        recoListData: state.recoListData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        urlActions,
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoList);