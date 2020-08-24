import React from "react";
import "./index.css";

function Item(props) {
  return (
    <div style={{ display: "flex", borderBottom: "1px solid black" }}>
      <p>
        {props.num.id}. {props.num.task}
      </p>
    </div>
  );
}

export default Item;
