import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './hot.css'
import HotList from '../hotList/hotList';
import axios from 'axios';
import Loading from '../loading/loading';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actionCeators/actionCeators';

class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hotData:null,
            loading:true,
            error:'',
         };
    }
    componentWillMount() {
        // this.props.actions.upLoadingTrue();
    }

    // //获取数据
    componentDidMount(){
        let _this = this;
        axios.get('http://localhost:4000/top/list?idx=1')
        .then(function(data){
            // console.log(JSON.stringify(data))
            _this.setState({
                hotData:data,
                loading:false
            });
        })
        .catch(function(error){
            _this.setState({
                error,
                loading:false
            })
        });
    }

    render() { 
        let list = '';
        if(this.state.hotData){
            let { data:{playlist:{tracks:result}} } = this.state.hotData;
            list = <HotList result={result} />
        }else if(this.state.error){
            list = <div className="check_internet" >请检查网络 </div>
        }
        //Loading
        let html = this.state.loading ? <Loading /> : list ;
        return ( 
            <div id="hot">
                <div className="hot_bar" >
                    <img src={require('../../img/hot_bar.jpg')} />
                </div>
                {html}
            </div>
         )
    }
}
 
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Hot);