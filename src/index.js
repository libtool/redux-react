import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import About from './About';
import Track from './Track';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';

registerServiceWorker();





const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path = "/" component={App} />
      <Route path = "/about" component={About} />
      <Route path = "/track/:id" component={Track} />

    </Router>
  </Provider>, document.getElementById('root'));
