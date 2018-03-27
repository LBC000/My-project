import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './nav.css'

//木偶组件
class List extends Component {
    render() { 
        let classN = this.props.activeNum == this.props.i  ?   'active' : '' ;
        return ( 
            <li onTouchStart={()=>{this.props.clickNav( this.props.i )}} >
                <div className={classN}><Link to={`/${this.props.e.path}`}>{this.props.e.title}</Link></div>
            </li>
         )
    }
}

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeNum:0
         };
    }

    componentWillMount(){
        //刷新时根据this.props.pathname来更新选中的nav按钮
        let {navData:{navBar}}=this.props;
        navBar.forEach((e,i) =>{
            if(this.props.pathname == `/${e.path}`){
                this.setState({
                    activeNum:i
                })
            }
        })
    }

    //nav按钮点击
    clickNav = (index)=>{
        this.setState({
            activeNum:index
        })
    }

    render() { 
        let {navData:{navBar}}=this.props;
        let list = navBar.map((e,i)=>{
            return <List e={e} key={i} {...this.state} i={i} clickNav={this.clickNav} />
        })
        return ( 
            <div>
                <ul className="nav">
                    {list}
                </ul>
            </div>
         )
    }
}
 
export default Nav;