import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import reducers from './reducers/reducer_index';

/*COMPONENTS FOR ROUTES*/
import App from './containers/App/App';
import LoginForm from './containers/LoginForm/LoginForm';
import RegisterForm from './containers/RegisterForm/RegisterForm';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


