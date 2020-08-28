import React from "react";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Item(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid black",
      }}
    >
      <p style={{ marginLeft: "20px", fontSize:"large" }}>
        {props.i}. {props.num.task}
      </p>
      <FontAwesomeIcon
        style={{ marginLeft: "auto", paddingRight: "40px", fontSize: "30px" }}
        icon={faTrash}
        onClick={() => props.handleDelete(props.num.id)}
      />
    </div>
  );
}

export default Item;
