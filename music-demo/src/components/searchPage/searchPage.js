import React, { Component } from 'react';
import Ajax from '../../js/ajax_1.0';
import './searchPage.css'

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputVal:null
         };
    }

    // //获取数据
    componentDidMount(){
        // let _this = this;
        // let id = 2130055061;
        // Ajax({
        //     url:'http://localhost:4000/search?keywords=热门歌曲',
        //     data:{
        //         // limit:30
        //     },
        //     success:function(data){
        //         console.log(data)
        //         _this.setState({
                    
        //         })
        //     }
        // })
        
    }

    //输入框输入
    inputKeyUp = (ev)=>{
        this.setState({
            inputVal:ev.target.value
        })
    }

    //清空点击
    reset = ()=>{
        this.refs.input.value = '';
        this.setState({
            inputVal:this.refs.input.value
        })
    }


    render() {
        console.log(this.state.inputVal)
        let classN = this.state.inputVal ? 'reset' :'';
        return (
            <div>
                <div className="search_top" >
                    <input type="search" placeholder="搜索歌曲、歌手、专辑" ref='input' onKeyUp={this.inputKeyUp} />
                    <i className={classN} onTouchStart={this.reset} ></i>
                </div>
            </div>
        );
    }
}

export default SearchPage;