import React, {Component} from 'react';
import './start.css'
import Home from '../Home/Home'

class Start extends Component {
    constructor() {
        super();
        this.state = {
            startImg: 'Start.jpg',
            enter_onOff: false, //入口开关
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            let img = this.refs.start;
            img.style.display = 'none';
            this.setState({
                enter_onOff: true //三秒后显示(解决刷新闪现问题)
            });
        }, 1000);
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        this.timer && clearTimeout(this.timer);
    }

    start = () => {
        return (this.state.enter_onOff
            ? <Home/>
            : '' //一开始不显示
        )
    };

    //让开始广告图片在最上面，盖住nav
    render() {
        return (
            <div>
                <img
                    id="startImg"
                    src={require('../../img/' + this.state.startImg)}
                    ref="start"/> {this.start()}
            </div>
        )
    }
}
export default Start