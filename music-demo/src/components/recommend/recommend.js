import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'

import MusicTitle from '../musicTitle/musicTitle';
import RecoList from '../recoList/recoList';
import NewMusic from '../newMusic/newMusic';
import RecoFooter from '../recoFooter/recoFooter';

class Recommend extends Component {
    render() { 
        return ( 
            <div className="recommend" >
                <RecoList recoListData={this.props.recoListData} />
                <NewMusic />
                <RecoFooter footerData={this.props.footerData} />
            </div>
         )
    }
}
 
export default Recommend;