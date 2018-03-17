import React, { Component } from 'react';
import './window.css'

class Window extends Component {
    render() { 
        console.log(this.props)
        let {window,bg}=this.props;
        console.log(bg)
        let box_w=window.width.replace('rem','')*1.1; //把滚动条顶出去
        let box_h=window.height;                      //高相同
        return ( 
            <div className="window" style={window} >
                <div className='box_bg' style={bg} ></div>
                <div className="window_box" style={{width:`${box_w}rem`,height:box_h}} >
                    {this.props.children}
                </div>
            </div>
         )
    }
}
 
export default Window;