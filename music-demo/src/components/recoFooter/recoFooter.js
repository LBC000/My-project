import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './recoFooter.css'

class RecoFooter extends Component {
    render() { 
        let {footerData:{footerLogo,bgImg}}=this.props;
        return ( 
            <div id="recoFooter" style={{ backgroundImage: `url(${bgImg})` }} >
                <div id="footer_bg">
                    <img src={footerLogo} alt=""/>
                </div>
                <Link to="/"><div className="donw">打开APP，发现更多好音乐></div></Link>
                <div className="copyright"><span>XX公司版权所有1997-2017 杭州XX科技有限公司运营</span></div>
            </div>
         )
    }
}
 
export default RecoFooter;