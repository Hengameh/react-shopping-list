import React from "react";
import "./ListItems.css";

function ListItems(props) {
  const myList = props.shoppingList;
  let message;
  if (!myList.length) {
    message = <p>Your Shopping List is empty. Please add your items.</p>;
  }

  return (
    <div>
      <div className="empty-list">{message}</div>
      <ul className="shopping-items-list">
        {myList.map((item) => (
          <li key={item.key}>
            <input type="text" 
              id={item.key} 
              value={item.text}
              onChange = {(e) => props.updateItem(e.target.value, item.key)}
              />
            <button
              className="delete-btn"
              onClick={() => props.deleteItem(item.key)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
