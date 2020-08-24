import React from "react";
import Item from "./Item.js";
import NumArray from "./NumArray.js";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: NumArray,
    };
    this.makeChange = this.makeChange.bind(this);
  }

  makeChange(id) {
    console.log(id, " is changed");
  }

  render() {
    const arr = this.state.todos.map((n) => (
      <Item key={n.id} num={n} makeChange={this.makeChange} />
    ));

    return <div className="card">{arr}</div>;
  }
}

export default MainContent;