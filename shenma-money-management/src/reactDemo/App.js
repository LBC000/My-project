import React,{Component} from 'react';
import '../css/base.css'
import '../css/mobile_reset.css'
import '../css/index.css'
import '../js/lib-flexible'

import Entrance from './Entrance/entrance'
class App extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div>
                <Entrance/>
            </div>
        )
    }
}
export default App