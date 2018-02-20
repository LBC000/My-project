import React,{Component} from 'react';
import Home from '../Home/Home'
import Nav from '../nav/nav'

class Entrance extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){

        return(
            <div>
                <Home/>
                <Nav/>
            </div>
        )
    }
}
export default Entrance