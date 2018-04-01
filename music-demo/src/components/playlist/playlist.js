import React, { Component } from 'react'
import './playlist.css'
import SearchList from '../searchList/searchList';
import axios from 'axios'
import Loading from '../loading/loading';
import CheckInternet from '../checkInternet/checkInternet';


const Tag = (props) =>{
    let html = props.tags ? props.tags.map( (e,i) =>{
        return <span key={i} >{e}</span>
    }) : '';
    return (
        <p> 
            <strong>标签:</strong>
            {html}
        </p>
    )
}

class PlayList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playListData:'',
            error:'',
            loading:true
         }
    }

    //获取数据
    componentDidMount(){
        //2092321859
        let _this = this;
        let id = this.props.match.params.id;
        axios.get(`http://localhost:4000/playlist/detail?id=${id}`)
        .then(function(data){
            console.log(data)
            _this.setState({
                playListData:data,
                loading:false
            })
        })
        .catch(function(error){
            _this.setState({
                error,
                loading:false
            })
        });
    }

    render() { 
        let list = '';
        let obj = {};
        //判断有没有取到数据，没有数据显示检查网络
        if(this.state.playListData){
            let { data:{result:{coverImgUrl,description,name,tags,tracks:result,creator:{nickname,avatarUrl,backgroundUrl}}} } = this.state.playListData;
            description = description.slice(0,58) + ' . . .' ;
            obj = {coverImgUrl,description,name,tags,result,nickname,avatarUrl,backgroundUrl};
            list = <SearchList result={obj.result} />;
        }else if(this.state.error){
            list = <CheckInternet />
        }
        //loading 或 列表
        let html = this.state.loading ? <Loading /> : list ;
        return ( 
            <div>
                <div className="playlist_mask" style={{ backgroundImage:`url(${obj.coverImgUrl})` }} ></div>
                <div className="playlist_top" >
                    <div className="playlist_top_img" style={{ backgroundImage:`url(${obj.coverImgUrl})` }} >
                        <img src={ require('../../img/play_icon.png') } />
                    </div>
                    <div className="playlist_top_text" >
                        <p>{obj.name}</p>
                        <div className="id_name" >
                            <i style={{ backgroundImage:`url(${obj.avatarUrl})` }} ></i>
                            <span>{obj.nickname}</span>
                        </div>
                    </div>
                </div>
                <div className="playlist_info" >
                    <Tag tags={obj.tags} />
                    <p> 
                        <strong className="playlist_intr_1" >简介:</strong>
                        <span className="playlist_intr_2" >
                            {obj.description}
                        </span>
                    </p>
                </div>
                <div className="playlist_title" >
                    <p>歌曲列表</p>
                </div>
                <div className="playlist_list" >
                    {html}
                </div>
            </div>
         )
    }
}
 
export default PlayList;