import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actionCeators/actionCeators';

import './home.css'

class Home extends Component {
    componentWillMount() {
        this.props.actions.upLoadingTrue();
    }
    render() { 
        console.log(this.props);
        return ( 
            <div id="home" >
                {this.props.children}
            </div>
         )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Home);