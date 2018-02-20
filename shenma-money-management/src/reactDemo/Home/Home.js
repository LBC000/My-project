import React,{Component} from 'react';
import './css/home.css'
import ScrollBar from './scroll_bar/scroll_bar'

class Home extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){

        return(
            <div id='home_box'>
                <ScrollBar/>
            </div>
        )
    }
}
export default Home