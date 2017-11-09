/*REACT ENTRY POINT*/
/*REACT ENTRY POINT*/
/*REACT ENTRY POINT*/

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
import thunk from 'redux-thunk';
import reducers from './reducers/reducer_index';

import NewItemForm from './containers/NewItem/newItemForm';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import Register from './containers/Register';
import Login from './containers/Login';
import Logout from './components/Logout';

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
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/register' component={Register}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


