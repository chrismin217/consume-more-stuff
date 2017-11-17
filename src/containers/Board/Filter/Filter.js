/* This is the FILTER component which will update the redux-aware BOARD component through its dispatched actions. BOARD will then re-render and pass in a new prop to GRID. */

/* User can choose to view items by price, items only in the conditions they specify, as well as only in the category they specify. */

/* Price sort, and category sort are one-time deals through drop-down menu. Condition is a checkbox-style sort. */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Filter.css';

/*ACTIONS*/

class Filter extends Component {

  constructor(props) {
    super(props);

    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeCondition = this.handleChangeCondition.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangePrice(event) {
    let e = event.target.value;
  }

  handleChangeCondition(event) {
    let e = event.target.id;  
  }

  handleChangeCategory(event) {
    let e = event.target.value;
  }

  render() {
    console.log('Filter render');
    
    return (
      <div className='Filter'>

        <div className="Price">
          <div className="Price-label"><span>Sort By Price</span></div>
          <select onChange={this.handleChangePrice}>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>

        <div className="Category">
          <div className="Category-label"><span>View Categories</span></div>
          <select onChange={this.handleChangeCategory}>
            <option>all</option>
            <option>vehicles</option>
            <option>appliances</option>
            <option>computers</option>
            <option>furniture</option>
          </select>
        </div>
        
        <div className="Condition">
          <div className="Condition-label"><span>Condition</span></div>
          <div>
            <label for='new'>New</label>
            <input type='checkbox' id='new' onChange={(e) => this.setState({new : !this.state.new})} />
          </div>
          <div>
            <label for='Good'>Good</label>
            <input type='checkbox' id='good' onChange={(e) => this.setState({new : !this.state.good})} />
          </div>
            <label for='Fair'>Fair</label>
            <input type='checkbox' id='fair' onChange={(e) => this.setState({new : !this.state.fair})} />
          <div>
            <label for='Worn'>Worn</label>
            <input type='checkbox' id='worn' onChange={(e) => this.setState({new : !this.state.worn})} />
          </div>
        </div>

        <div className="Search-button">
          <button>Search</button>
        </div>
      </div>
    );
  }

}
//end class


export default connect(
  null,
  null
)(Filter);