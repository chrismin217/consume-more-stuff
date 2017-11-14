/*REACT ENTRY POINT*/
/*REACT ENTRY POINT*/
/*REACT ENTRY POINT*/

import React from 'react';
import ReactDOM from 'react-dom';
import ScrollArea from 'react-scrollbar';
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
import LoginUser from './containers/Login';
import AuthUserEditItem from './containers/AuthUserEditItem';
import MyItems from './containers/MyItems';
import CategoryView from './containers/CategoryView';
import AllItems from './containers/AllItems';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);


ReactDOM.render(

  <Provider store={store}>
  <div>
  <ScrollArea/>
    <Router>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/all' component={AllItems} />
        <Route path='/items/:id' component={AuthUserEditItem}/>
        <Route path='/new' component={NewItemForm}/>
        <Route path='/users/:id/items' component={MyItems}/>
        <Route path='/login' component={LoginUser} />
        <Route path='/categories/:id/items' component={CategoryView} />
      </div>
    </Router>
  </div>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


