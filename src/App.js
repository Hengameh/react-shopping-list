import React, { Component } from "react";
import "./App.css";
import ListItems from "./ListItems";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingList: [],
      currentItem: {
        text: "",
        key: "",
      },
    };

    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text.trim().length !== 0) {
      this.setState({
        shoppingList: [...this.state.shoppingList, newItem],
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  updateItem(text, key) {
    const shoppingList = this.state.shoppingList;
    shoppingList.map(item => {
      if (item.key === key){
        item.text = text;
      }
    }); 
    this.setState ({
      shoppingList: shoppingList
    });
  }

  deleteItem(key) {
    const filteredItems = this.state.shoppingList.filter(
      (item) => item.key !== key
    );
    this.setState({
      shoppingList: filteredItems
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Shopping List</h1>
          <form id="shopping-list-form" onSubmit={this.addItem}>
            <input
              name="list-item"
              type="text"
              placeholder='Eg. "a dozen eggs", "detergent".'
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />

            <button
              type="submit"
              disabled={
                !this.state.currentItem.text ||
                !this.state.currentItem.text.trim().length
              }
            >
              Add to Shopping list
            </button>
          </form>
        </header>

        <ListItems
          shoppingList={this.state.shoppingList}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />

        <Footer />
      </div>
    );
  }
}
export default App;
