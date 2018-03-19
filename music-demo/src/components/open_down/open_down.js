import React, { Component } from 'react'

import './open_down.css'

class Open_down extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {bg}=this.props;
        return ( 
            <div className="open_down_box">
                <div className="open_down">
                    <div className="open_down_l op" >
                        <span>打开</span>
                    </div>
                    <div className="open_down_r op" >
                        <span>下载</span>
                    </div>
                </div>
            </div>
         )
    }
}
 
export default Open_down;