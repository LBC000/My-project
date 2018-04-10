import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import Loading from './components/loading/loading';
import store from '../src/store/store'

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <div>
                <Loading />
                <App />
            </div>
        </Router>
    </Provider>
, document.getElementById('root'));
//热更新
if (module.hot) {module.hot.accept();}