/* This is the FOOTER component. It will contain a next and previous link to scroll through items. */

/* It will also display the current set of items vs. the total amount of items ..
EG: | 121 - 240 / 2500 | */

/* STRETCH : Lastly, it will have an option to go back to top like CL. */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Footer.css';

/*ACTIONS*/

class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Footer render');

    return (
      <div className="Footer">
        <h1>Footer</h1>
        <span>Next --- Previous</span>
      </div>
    );
  }

}
//end class

export default connect(
  null,
  null
)(Footer);