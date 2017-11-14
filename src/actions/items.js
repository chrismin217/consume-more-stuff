/*ACTIONS FOR ITEMS*/
/*ACTIONS FOR ITEMS*/
/*ACTIONS FOR ITEMS*/

import {
  getItems,
  getInitialItems,
  getItemById,
  getItemsByUser
} from '../lib/GETrequests';

import { addNewItem } from '../lib/POSTrequests';
import { itemDelete } from '../lib/DELETErequests';
import { itemEdit } from '../lib/PUTrequests';
const axios = require('axios');

export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_INITIAL_ITEMS = 'LOAD_INITIAL_ITEMS';
export const LOAD_ITEM = 'LOAD_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const LOAD_USER_ITEMS = 'LOAD_USER_ITEMS'

export const loadItems = () => {
  return function(dispatch) {
    return getItems().then(items => {
      dispatch({
        type : LOAD_ITEMS,
        items : items
      });
    });
  }
}

export const loadInitialItems = () => {
  return function(dispatch) {
    return axios.get('api/items/initial').then(initialItems => {
      console.log('AXIOS GET ============ ', initialItems);
      dispatch({
        type : LOAD_INITIAL_ITEMS,
        initialItems : initialItems
      });
    });
  }
}

export const loadUserItems = (user_id) => {
  return function(dispatch) {
    return getItemsByUser(user_id).then((items) => {
      dispatch({
        type: LOAD_USER_ITEMS,
        items: items
      });
    });
  }
}

export const loadItem = (item) => {
  console.log('first item', item)
  return function(dispatch) {
    return getItemById(item).then(item => {
      console.log('second item', item);
      dispatch({
        type : LOAD_ITEM,
        item : item
      });
    });
  }
}

export const addItem = (item) => {
  return function(dispatch) {
    return axios.post('/api/items/new', item).then((newItem) => {
      console.log('ACTION', newItem);
      dispatch({
        type: ADD_ITEM,
        item: newItem.data
      });
    });
  }
}



export const deleteItem = (item) => {
  return function(dispatch) {
    return itemDelete(item).then(response => {
      console.log('RESPONSE', response);
      dispatch({
        type: DELETE_ITEM,
        item: response
      });
    });
  }
}

export const editItem = (item) => {
  console.log(item, 'ACTION')
  return function(dispatch) {
    return axios.put('/api/items/' + item.id, item).then(editedItem => {
      console.log(editedItem, 'editItem')
      dispatch({
        type: EDIT_ITEM,
        item: editedItem.data
      });
    });
  }
}