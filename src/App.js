import React, { useState, useEffect } from 'react';
import './App.css';
import SortableList from './components/List';
import arrayMove from 'array-move';
import AddItem from './components/AddItem';

function App() {
  const [items, setItems] = useState([]);

  // Load todos from localstorage
  useEffect(() => {
    const todos = localStorage.getItem('listItems');
    if (todos) {
      setItems(JSON.parse(todos));
    } else {
      setItems([]);
    }
  }, []);

  const onSortEnd = ({oldIndex, newIndex}) => {
    let sortArray = arrayMove(items, oldIndex, newIndex);
    setItems(sortArray);
    localStorage.setItem('listItems', JSON.stringify(sortArray));
  };

  const addItem = (item) => {
    setItems(items => [...items, item]);
    localStorage.setItem('listItems', JSON.stringify([...items, item]));
  }

  return (
    <div className="App">
      <AddItem addItem={addItem}/>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </div>
  );
}

export default App;
