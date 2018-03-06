import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './list.css'

class List extends Component {
    constructor(props) {
        super(props);
          
  
        this.state = { 
            newMlist:[
                {
                    musicnName:'Alive',
                    details:'Do As Infinity - ALIVE'
                },
                {
                    musicnName:'La La La',
                    details:'Weki Meki'
                },
                {
                    musicnName:'La La La',
                    details:'Weki Meki'
                },
                {
                    musicnName:'La La La',
                    details:'Weki Meki'
                },
                {
                    musicnName:'La La La',
                    details:'Weki Meki'
                }
            ]
         }
    }
    render() { 
        let {newMlist}=this.state;
        console.log(newMlist)
        let list=newMlist.map((e,i)=>{
            let obj={
                key:i,
                musicnName:e.musicnName,
                details:e.details
            }
            return <MList {...obj}/>
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
        let {musicnName,details}=this.props;
        return ( 
            <li>
                <p>{musicnName}</p>
                <span>
                    <i></i>
                    {details}          {/*详情*/}
                </span>
                <i id="newM_Playicon"></i>
            </li>
         )
    }
}

export default List;