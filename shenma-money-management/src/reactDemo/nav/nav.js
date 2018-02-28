import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './css/nav.css'

//li结构
class List extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    //点击事件
    TouchStart=()=>{
        let {cActive,i}=this.props;
        cActive(i)
    };

    render(){
        let {text,navImg,i,active,Route}=this.props;
        console.log(Route)
        let classN=i==active?'active':'';
        let imgClass=i==active?'zImg':'';
        return(
            <li className={classN}
                onTouchStart={this.TouchStart}
            >
                <Link to={'/'+Route}>
                    <img className={imgClass} src={require(`./img/${navImg}`)}/>
                    <p>{text}</p>
                </Link>
            </li>
        )
    }
}

//数据
class Nav extends Component{
    constructor(){
        super();
        this.state={
            ListArr:[
                {
                    text:'首页',
                    img:'nav1.jpg',
                    Route:'Home'
                },
                {
                    text:'投资',
                    img:'nav2.jpg',
                    Route:'Invest'
                },
                {
                    text:'发现',
                    img:'nav3.jpg',
                    Route:'Find'
                },
                {
                    text:'我的财富',
                    img:'nav4.jpg',
                    Route:'Me'
                }
            ],
            active:0
        }
    }

    //传入下标
    cActive=(active)=>{
        this.setState({
            active
        })
    };

    render(){
        let {ListArr,active}=this.state;
        let list=ListArr.map((e,i)=>{
            let obj={
                key:i,
                text:e.text,
                navImg:e.img,
                i,
                active,
                cActive:this.cActive,
                Route:e.Route
            };
            return <List {...obj}/>
        });
        return(
            <div id='nav'>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
export default Nav