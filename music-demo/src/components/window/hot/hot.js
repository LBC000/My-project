import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import List from '../../list/list';

class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="hot">
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