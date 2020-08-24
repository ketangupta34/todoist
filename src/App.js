import React from "react";
import "./index.css";
import MainContent from "./MainContent";
import AddContent from "./AddContent";

function App() {
  return (
    <div>
      <div>
        <h1 style={{
            textAlign: "center",
            color: "#ec625f",
          }}>LETS DO THIS!</h1>
      </div>

      <AddContent />
    </div>
  );
}

export default App;
