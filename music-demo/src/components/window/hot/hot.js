import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../../../css/hide_scroll_bar.css'

class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="hot" className="hideScrollBar">
                <ul>
                    <li>hot</li>
                    <li>6</li>
                    <li>6</li>
                    <li>6</li>
                    <li>6</li>
                    <li>6</li>
                    <li>6</li>
                    <li>6</li>
                    <li>6</li>
                    <li>hot</li>
                    <li>6</li>
                    <li>6</li>
                    <li>6</li>
                    <li>6</li>
                    <li>6</li>
                    <li>hot</li>
                    <li>hot</li>
                    <li>hot</li>
                    <li>hot</li>
                    <li>hot</li>
                    <li>hot</li>
                </ul>
            </div>
         )
    }
}
 
export default Hot;