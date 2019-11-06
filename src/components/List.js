import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import SortableItem from './Item';
import './List.css';

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});


export default SortableList;