import React from 'react';
import Item from './item';

const FilterMap = ({ list, cat_id, number }) => {
  return (
    <div>
      {
        list.filter((listItem) => {
          return listItem.category_id === Number(cat_id)
        }).map((item) => {
          return (
            <Item
              Image={item.image}
              body={item.body}
              price={item.price}
              condition={item.Condition.type}
              category={item.Category.name}
              updatedAt={item.updatedAt}
              key={item.id}
            />
          )
        })
      }
    </div>
  )
}

export default FilterMap;