import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './list.css'

class List extends Component {
    render() { 
        let {newMusicData}=this.props;
        let list=newMusicData.map((e,i)=>{
            return <MList {...e} key={i} />
        })
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
        console.log(this.props)
        let {musicnName,details,RouteID,img,url}=this.props;
        return ( 
            /* Link to 把数据传给匹配/m/play/的页面 */
            <Link to={{pathname:`/PlayPage/${RouteID}}`,state:this.props}}>
                <li>
                    <p>{musicnName}</p>
                    <span>
                        <i></i>
                        {details}          {/*详情*/}
                    </span>
                    <i id="newM_Playicon"></i>
                </li>
            </Link>
         )
    }
}

export default List;