import React, { Component } from 'react'
import './loading.css'
class Loading extends Component {
    render() { 
        return ( 
            <div id="loading" >
                <img src={ require('../../img/loading.gif') } />
            </div>
         )
    }
}
 
export default Loading;