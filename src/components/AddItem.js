import React, { useState } from 'react';
import './AddItem.css';

const AddItem = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleChange = (input) => {
    setItem(input);
  }

  const handleSubmit = (event) => {
    addItem(item);
    event.preventDefault();

    setItem('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Lägg till todo
          <input type="text" name="name" value={item} onChange={(e) => handleChange(e.target.value)}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};


export default AddItem;