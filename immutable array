import React, { useState } from 'react';

function ArrayDemo() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

  const handleAdd = () => {
    const newItem = prompt('Enter new fruit:');
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleRemove = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const handleUpdate = (index) => {
    const newItem = prompt('Enter new fruit name:');
    setItems(prevItems => prevItems.map((item, i) => i === index ? newItem : item));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleUpdate(index)}>Update</button>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Fruit</button>
    </div>
  );
}

export default ArrayDemo;
