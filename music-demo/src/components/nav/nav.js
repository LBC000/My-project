import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './nav.css'

class List extends Component {
    render() { 
        let classN= this.props.active==this.props.i  ?   'active' : '' ;
        return ( 
            <li onClick={()=>{this.props.clickNav(this.props.i)}} >
                <div className={classN}><Link to={`/${this.props.e.path}`}>{this.props.e.title}</Link></div>
            </li>
         )
    }
}

class Nav extends Component {
    render() { 
        let {navData:{navBar,active},clickNav}=this.props;
        let list=navBar.map((e,i)=>{
            return <List e={e} key={i} active={active} i={i} clickNav={clickNav} />
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