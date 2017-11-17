/* Dummy component that simply runs map() over a list of items. It will render the Item dummy component multiple times. */
import React from 'react';

import '../Board.css';

/*CHILD COMPONENTS*/
import Item from '../../../components/Item/Item';


const Grid = ({ list }) => {

  console.log('Grid render');
  console.log('Grid list of items : ', list);

  return (
    <div className="Grid">
      <h4>Grid</h4>
    </div>
  );


}//end component

export default Grid;