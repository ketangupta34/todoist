import React from "react";
import "./index.css";
import Item from "./Item";

class AddContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
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

  render() {
    const arr = this.state.todos.map((n) => <Item key={n.id} num={n} />);

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

        <div>{arr}</div>
      </div>
    );
  }
}

export default AddContent;
