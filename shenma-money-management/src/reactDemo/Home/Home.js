import React, {Component} from 'react';
import '../../css/window.css'
import ScrollBar from './scroll_bar/scroll_bar'
import Tips from './tips/tips'

class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div className='home_box'>
                <ul>
                    <li><ScrollBar/></li>
                    <li><Tips/></li>
                </ul>
            </div>
        )
    }
}
export default Home