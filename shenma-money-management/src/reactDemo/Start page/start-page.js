import React,{Component} from 'react';
import './start.css'
import Entrance from '../Entrance/entrance'

class Start extends Component{
    constructor(){
        super();
        this.state={
            startImg:'Start.jpg',
            enter_onOff:false,      //入口开关
        }
    }

    componentDidMount() {
        this.timer = setTimeout(()=>{
            let img=this.refs.start;
            img.style.display='none';
            this.setState({
                enter_onOff:true                   //三秒后显示(刷新闪现问题)
            });
        },1000);
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    start=()=>{
        return (
            this.state.enter_onOff?<Entrance/>:'' //一开始不显示
        )
    };

    render(){

        return(
            <div>
                <img
                    src={require('../../img/'+this.state.startImg)}
                    ref="start"
                />
                {this.start()}
            </div>
        )
    }
}
export default Start