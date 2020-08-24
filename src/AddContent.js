import React from "react";
import "./index.css";
import NumArr from "./NumArray"

const todoList = [];

class AddContent extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoList,
      currentItem: {
        task: "",
        id: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        task: e.target.value,
        id: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.task !== "") {
      const newTodos = [...todoList, newItem];
      console.log(newTodos);


      this.state = {
        todos: newTodos,
        currentItem: {
          task: "",
          id: "",
        },
      };
    }
  }

  render() {
    return (
      <div className="card">
        <input
          type="text"
          name="name"
          placeholder="Add task"
          className="buttonInp"
          onChange={this.handleInput}
        />

        <input
          type="submit"
          value="Add item"
          className="buttonAdd"
          onClick={this.addItem}
        />
      </div>
    );
  }
}

export default AddContent;
