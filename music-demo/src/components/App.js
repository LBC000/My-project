//640*1136设计稿，根字体32px
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import '../css/base.css'
import '../js/lib-flexible'
import Ajax from '../js/ajax_1.0';

//主页
import Home from './home/home';

import Recommend from './recommend/recommend'
import Nav from './nav/nav';
import TopBab from './topBar/topBar';
import Window from './window/window';

//热歌榜
import Hot from './hot/hot';

//搜索
import SearchPage from './searchPage/searchPage';

//播放页
import PlayPage from './playPage/playPage';

//歌单列表
import PlayList from './playlist/playlist';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            homeData:{
                navData:{
                    navBar:[
                        {
                            title:'推荐音乐',
                            path:'Recommend'
                        },
                        {
                            title:'热歌榜',
                            path:'Hot'
                        },
                        {
                            title:'搜索',
                            path:'SearchPage'
                        }
                    ],
                    active:0
                },
                topBarData:{
                    log:require( '../img/topLog.png'),
                    downText:'下载APP'
                },
                recoListData:[
                    {
                        img:require('../img/18533367999267309.webp'),
                        text:'华研国际热门音乐精选50首'
                    },
                    {
                        img:require('../img/18572950418591275.webp'),
                        text:'【古风】和声即情感，舍此无他'
                    },
                    {
                        img:require('../img/109951163081971963.webp'),
                        text:'诗和故事：我弹一曲思念，你...'
                    },
                    {
                        img:require('../img/109951163097632993.webp'),
                        text:'2017国际古典音乐大奖提...'
                    },
                    {
                        img:require('../img/109951163115144091.webp'),
                        text:'2017年度最热新歌TOP100'
                    },
                    {
                        img:require('../img/109951163168289079.webp'),
                        text:'【神秘组织】装X常用BGM'
                    }
                ],
                newMusicData:[
                    {
                        musicnName:'Alive',
                        details:'Do As Infinity - ALIVE',
                        RouteID:'1Alive',
                        img:require('../img/109951163081971963.webp'),
                        musicUrl:require('../music_file/111.mp3')
                    },
                    {
                        musicnName:'刘德华',
                        details:'Weki Meki',
                        RouteID:'2La La La',
                        img:require('../img/109951163097632993.webp'),
                        musicUrl:require('../music_file/王妃dj版-萧敬腾-激情中文秒下不解释.mp3')
                    },
                    {
                        musicnName:'La La La',
                        details:'Weki Meki',
                        RouteID:'3La La La',
                        img:require('../img/109951163115144091.webp'),
                        musicUrl:require('../music_file/王妃dj版-萧敬腾-激情中文秒下不解释.mp3')
                    }
                ],
                footerData:{
                    footerLogo:require('../img/footerLogo.png'),
                    bgImg:require('../img/recommand_bg_2x.png')
                }
            },
            playPageData:{
                // bgImg:require('../img/109951163168289079.webp'),
                playMusicData:{
                    musicUrl:require('../music_file/111.mp3'),
                    musicImg:require('../img/109951163097632993.webp'),
                    num:0,
                    Onoff:true,
                    display:'block'
                }
            }
         }
    }

    //点击主页导航栏
    clickNav=(index)=>{
        this.state.homeData.navData.active=index;
        this.setState({ 
            homeData:this.state.homeData
         });
    }


    render() {
        let {homeData:{topBarData,navData,recoListData,newMusicData,footerData}}=this.state;
        // //html的字体大小
        let htmlFontSize=getComputedStyle(document.documentElement).fontSize.replace('px','');
        // //根据手机的大小减去 头部广告+导航栏的 高度，剩下的是window窗口(隐藏滚动条)的高度
        let phone_h = document.documentElement.clientHeight/htmlFontSize;
        let Home_window_h = phone_h - 3.25;
        // let PlayPage_window_h = phone_h - 1.859375;

        return (
            <div id="app">
                <Switch>
                    {/* 播放页 */}
                    <Route  path="/PlayPage/:id" component={PlayPage} />
                    <Route  path="/PlayList/:id" component={PlayList} />
                    <Route  path='/' render={(url)=>{
                        return(
                        // 主页
                        <Home>
                            <TopBab topBarData={topBarData} />
                            <Nav navData={navData} clickNav={this.clickNav} pathname={url.location.pathname} />
                            <Window {...{window:{marginTop: '3.25rem',width:'10rem',height:`${Home_window_h}rem`}}}>
                                <Route exact path='/' render={()=> <Recommend recoListData={recoListData} newMusicData={newMusicData} footerData={footerData} /> } />
                                <Route path='/Recommend' render={()=> <Recommend recoListData={recoListData} newMusicData={newMusicData} footerData={footerData} /> } />
                                <Route path='/Hot' component={Hot} />
                                <Route path='/SearchPage' component={SearchPage} />
                            </Window>
                        </Home>
                    ) 
                    }} />
                </Switch>
            </div>
        );
    }
}

export default App;
