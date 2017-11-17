/* Main component. Contains Header, SearchFilter, Board, and Footer components. Is not aware of Redux store. */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

/*ACTIONS*/
import { loadItems } from '../../actions/items';

/*CHILD COMPONENTS*/
import Header from '../Header/Header';
import Board from '../Board/Board';
import Footer from '../Footer/Footer';

class App extends Component {

  constructor(props) {
    super(props);
  }

  getInitialState() {
    this.props.loadInitialItems();
  }

  render() {
    console.log('App render');
    return (
      <Header />
      <Board />
      <Footer />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    initialItems: state.initialItems
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialItems: () => {
      dispatch(loadItems());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
