/* This is the Board component. It contains a SearchFilter and Grid component. SearchFilter will dispatch actions that change a filter, and Grid simply renders a map of a list of items. */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Board.css';

/*ACTIONS*/

class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Board render');

    let items = this.props.items;
    let filter = this.props.filter;

    return (
      <div className="Board">
        <h1>Board</h1>
      </div>
    );
  }

}
//end class

export default connect(
  null,
  null
)(Board);