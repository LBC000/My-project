import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
    <App/>
</Router>, document.getElementById('root'));
registerServiceWorker();
//热更新
if (module.hot) {
    module
        .hot
        .accept();
}