/* This is the Board component. It contains a SearchFilter and Grid component. SearchFilter will dispatch actions that change a filter, and Grid simply renders a map of a list of items. */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Board.css';

/*ACTIONS*/

/*CHILD COMPONENTS*/
import Filter from './Filter/Filter';
import Grid from './Grid/Grid';

class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Board render');

    let items = this.props.items;
    let filter = this.props.filter; //{ price : 1, category: 1, condition: 2}

    return (
      <div className="Board">
        <Filter />
        <Grid list={items} />
      </div>
    );
  }

}
//end class

export default connect(
  null,
  null
)(Board);