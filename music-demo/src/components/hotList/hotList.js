import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './hotList.css'

class HotList extends Component {
    render() { 
        let {result} = this.props;
        
        let list = result ? result.map((e,i)=>{
            return <MList {...e} key={i} />
        }) : '';
        return ( 
            <ul className="MusicList">
                {list}
            </ul>
         )
    }
}



//li结构组件
class MList extends Component {
    render() {
        let {name,id,song:{album,artists}} = this.props;
        let sginfo = artists.map((e,i) => e.name).join(' / ')
        return ( 
            /* Link to 把数据传给匹配/m/play/的页面 */
            <Link to={{pathname:`/PlayPage/${id}`,state:this.props}}>
                <li>
                    <p>{name}</p>
                    <span>
                        <i></i>
                        {sginfo + ' - ' + name}          {/*详情*/}
                    </span>
                    <i id="newM_Playicon"></i>
                </li>
            </Link>
         )
    }
}

export default HotList;