import React, { Component } from 'react';
import './window.css'

class Window extends Component {
    render() { 
        let {window,bg,bg1}=this.props;
        let box_w=window.width.replace('rem','')*1.1; //把滚动条顶出去
        let box_h=window.height;                      //高相同
        return (
            <div>
                <div className='box_bg' style={bg} ></div>
                <div className="playPage_cover" style={bg1} ></div>
                <div className="window" style={window} >
                    <div className="window_box" style={{ width:`${box_w}rem`,height:box_h }} >
                        {this.props.children}
                    </div>
                </div>
            </div> 
            
         )
    }
}
 
export default Window;