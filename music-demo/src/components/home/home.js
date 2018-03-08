import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'

import TopBar from '../topBar/topBar';
import Nav from '../nav/nav';
import Window from '../window/window';
import SwitchMain from '../switchMain/switchMain';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //窗口的样式 + 路由的逻辑
        let obj={
            styles:{
                box:{
                    height:'14.5rem',
                    marginTop: '3.25rem'
                }
            },
            component:<SwitchMain />
        }
        return ( 
            <div id="home">
                <TopBar />
                <Nav />
                <Route path='/' render={(math)=>{
                    return <Window {...obj} url={math}/>
                }} />
            </div>
         )
    }
}
 
export default Home;