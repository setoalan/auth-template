import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import Signup from './components/signup';
import Signin from './components/signin';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signup" component={Signup} />
        <Route path="signin" component={Signin} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);

registerServiceWorker();
