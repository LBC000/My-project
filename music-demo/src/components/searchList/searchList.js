import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './hotList.css'

class SearchList extends Component {
    render() { 
        console.log(this.props,'数据')
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
    toPlayPage = (id)=>{
        
    }
    render() {
        let {name,id,artists,album} = this.props;
        //拼歌手
        let sginfo = artists.map((e,i) => e.name).join(' / ')
        return ( 
            /* Link to 把数据传给匹配/m/play/的页面 */
            <Link to={{pathname:`/PlayPage/${id}`}} >
                <li>
                    <p>{name}</p>
                    <span>
                        <i></i>
                        {sginfo + ' - ' + album.name }          
                    </span>
                    <i id="newM_Playicon"></i>
                </li>
            </Link>
         )
    }
}

export default SearchList;

{/* <Link to={{pathname:`/PlayPage/${id}`}} >
</Link> */}