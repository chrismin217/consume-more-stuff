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
    this.state = {
      initialItems : this.props.loadInitialItems()
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('App render');
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }

}
//end class

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
