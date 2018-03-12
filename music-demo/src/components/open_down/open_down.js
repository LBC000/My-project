import React, { Component } from 'react'

import './open_down.css'

class Open_down extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {bg}=this.props;
        console.log(bg)
        return ( 
            <div id="open_down_box">
                <div id="open_down">
                    233
                </div>
                <div style={bg} id="open_down_bg"></div>  {/* 背景图在底部，和大背景融合 */}
            </div>
            
         )
    }
}
 
export default Open_down;