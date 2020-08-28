import React from "react";
import "./index.css";
import Item from "./Item";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

class AddContent extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentItem: {
        task: "",
        id: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      const newTodo = [...this.state.todos, newItem];
      console.log(newTodo);
      this.setState({
        todos: newTodo,
        currentItem: {
          task: "",
          id: "",
        },
      });
      console.log(this.state.Todos);
    }
  }

  handleDelete(key) {
    const items = this.state.todos.filter((item) => item.id !== key);
    this.setState({
      todos: items,
    });
    console.log("handle delete called key = ", key);
  }

  render() {
    const arr = this.state.todos.map((n) => (
      <Item key={n.id} num={n} handleDelete={this.handleDelete} />
    ));

    let todoList;
    if (this.state.todos.length !== 0) {
      todoList = (
        <div className="card" style={{overflow:"scroll", height: "400px" }}>
          {arr}
        </div>
      );
    } else {
      todoList = (
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <FontAwesomeIcon
            style={{ margin: "auto", fontSize: "70px" }}
            icon={faTasks}
          />
        </div>
      );
    }

    return (
      <div>
        {todoList}

        <div className="card">
          <input
            type="text"
            name="name"
            placeholder="Add task"
            value={this.state.currentItem.task}
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
      </div>
    );
  }
}

export default AddContent;
