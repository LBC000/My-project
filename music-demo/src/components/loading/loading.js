import React, { Component } from 'react'
import { connect } from 'react-redux';
import './loading.css'
class Loading extends Component {
    render() { 
        console.log(this.props.loading)
        return ( 
            <div id="loading" style={{ display: this.props.loading ? 'block' : 'none' }} >
                <img src={ require('../../img/loading.gif') } />
            </div>
         )
    }
}
 
function mapStateToProps(state) {
    return {
        loading: state.loading,
    }
}

export default connect(mapStateToProps)(Loading);