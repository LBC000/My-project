import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Ajax from '../../js/ajax_1.0';
import './searchPage.css'
import SearchList from '../searchList/searchList';
import Loading from '../loading/loading';
import CheckInternet from '../checkInternet/checkInternet';

//热门搜索标签
class Hot_tag extends Component {
    getVal = (ev)=>{
        this.props.hotVal(ev.target.innerText)
    }
    render() {
        let {artists} = this.props;
        artists ? artists.length = 10 : '' ;
        let list = artists ? artists.map((e,i) =>{
            return <li onClick={this.getVal} key={i}> <span>{e.name}</span> </li>
        })
        : '' ;
        return (
            <ul className="hot_tag" >
                {list}
            </ul>
        );
    }
}

//热门搜索
class Hot_search extends Component {
    render() {
        let {loading,error} = this.props;
        let list = '';
        if(this.props.hotSearchData){
            list = <Hot_tag hotVal={this.props.hotVal} {...this.props.hotSearchData} />;
        }else if(error){
            list = <CheckInternet />
        }
        
        let html = loading ? <Loading /> : list;
        return (
            <div className='hot_search' >
                <p>热门搜索</p>
                {html}
            </div>
        );
    }
}

//搜索结果
class SearchResults extends Component {
    render() {
        let {loading,error} = this.props;
        console.log(loading,error,this.props.result)
        let list = '';
        if(this.props.result){
            list = <SearchList result={this.props.result} />;
        }else if(error){
            list = <CheckInternet />
        }
        
        let html = loading ? <Loading /> : list;
        return (
            <div className={`search_list`} >
                <p>最佳匹配</p>
                {html}
            </div>
        );
    }
}

//搜索页
class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputVal:null,
            hotSearchData:null,
            SearchListData:null,
            error:'',
            loading:true
         };
    }

    //获取数据hotSearchData
    componentDidMount(){
        let _this = this;
        axios.get('http://localhost:4000/top/artists')
        .then((data)=>{
            _this.setState({
                hotSearchData:data.data,
                loading:false
            })
        }).catch((error)=>{
            _this.setState({
                error,
                loading:false
            })
        })
    }

    //输入框输入
    inputKeyUp = (ev)=>{
        this.setState({
            inputVal:ev.target.value,
            SearchListData:''
        })
        let _this = this;
        //按回车的时候才加载loading
        if(ev.keyCode ==13){
            this.setState({
                loading:true
            })
            axios.get(`http://localhost:4000/search?keywords=${ev.target.value}`)
            .then((data)=>{
                _this.setState({
                    SearchListData:data.data,
                    loading:false
                })
            }).catch((error)=>{
                _this.setState({
                    error,
                    loading:false
                })
            })

            // Ajax({
            //     url:`http://localhost:4000/search?keywords=${ev.target.value}`,
            //     data:{
            //         // limit:30
            //     },
            //     success:function(data){
            //         console.log(data)
            //         _this.setState({
            //             SearchListData:data
            //         })
            //     }
            // })
        }
    }

    //热门搜索点击
    hotVal = (val)=>{
        let _this = this;
        this.refs.input.value = val;
        this.setState({
            inputVal:val,
            loading:true
        })
        axios.get(`http://localhost:4000/search?keywords=${val}`)
        .then((data)=>{
            _this.setState({
                SearchListData:data.data,
                loading:false
            })
        }).catch((error)=>{
            _this.setState({
                error,
                loading:false
            })
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
        console.log(this.state.SearchListData)
        let { result }   = this.state.SearchListData ? this.state.SearchListData : '';
        let { songs } = result ? result : '' ;
        console.log(songs)
        //清空
        let classReset = this.state.inputVal ? 'reset' :'';
        let html = this.state.inputVal ? <SearchResults result={songs} {...this.state} /> : <Hot_search {...this.state} hotVal={this.hotVal} /> ;
        return (
            <div>
                <div className="search_top" >
                    <input type="search" placeholder="搜索歌曲、歌手、专辑" ref='input' onKeyUp={this.inputKeyUp} />
                    <i className={classReset} onTouchStart={this.reset} ></i>
                </div>
                {html}
            </div>
        );
    }
}

export default SearchPage;