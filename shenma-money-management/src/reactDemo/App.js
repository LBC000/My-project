import React,{Component} from 'react';
import '../css/base.css'
import '../css/mobile_reset.css'
import '../css/index.css'
import '../js/lib-flexible'

import Start from './Start page/start-page'
class App extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <Start/>
        )
    }
}
export default App