import React, { Component } from 'react'
import '../newMusic/newMusic.css'

import MusicTitle from '../musicTitle/musicTitle';
import List from '../list/list';
import Ajax from '../../js/ajax_1.0';


class NewMusic extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            NewMusicData:null
         };
    }

    componentDidMount(){
        let _this = this;
        Ajax({
            url:'http://localhost:4000/personalized/newsong',
            data:{
                // limit:30
            },
            success:function(data){
                _this.setState({
                    NewMusicData:data
                })
            }
        })
    }

    render() { 
        return ( 
            <div>
                <MusicTitle {...{title:'最新音乐'}} /> 
                <List {...this.state.NewMusicData} />
            </div>
         )
    }
}
 
export default NewMusic;