import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Ajax from '../../js/ajax_1.0';
import './hot.css'
import HotList from '../hotList/hotList';

class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hotData:null
         };
    }

    // //获取数据
    componentDidMount(){
        let _this = this;
        let id = 2130055061;
        Ajax({
            url:'http://localhost:4000/personalized/newsong',
            data:{
                // limit:30
            },
            success:function(data){
                _this.setState({
                    hotData:data
                })
            }
        })
        
    }

    render() { 
        return ( 
            <div id="hot">
                <div className="hot_bar" >
                    <img src={require('../../img/hot_bar.jpg')} />
                </div>
                <HotList {...this.state.hotData} />
            </div>
         )
    }
}
 
export default Hot;