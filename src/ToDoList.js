import React, { useState } from "react";

function ToDoList() {
    const [items, setItems] = useState([
        { id: 1, name: 'Проснуться ' },
        { id: 2, name: 'Лечь спать ' },
        { id: 3, name: 'Проснуться снова ' },
      ]);    
    const deleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
      };
    return (
        <div>
            <h2>Список дел на сегодня:</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => deleteItem(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default ToDoList;