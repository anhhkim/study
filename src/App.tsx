import { useState } from "react";
import "./App.css";
import { Math1 } from "./features/math1/Math1";
import { Math2 } from "./features/math2/Math2";
import { Math3 } from "./features/math3/Math3";

function App() {
  const [path, setPath] = useState("math1");
  const renderBody = () => {
    switch (path) {
      case "math1":
        return <Math1 />;
      case "math2":
        return <Math2 />;
      case "math3":
        return <Math3 />;
      default:
        return <div>In Progress</div>;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <ul onClick={() => setPath("math1")}>Add/Subtract 2 numbers Within 10</ul>
        <ul onClick={() => setPath("math2")}>Add/Subtract 3 numbers Within 10</ul>
        <ul onClick={() => setPath("math3")}>Add/Subtract 2 numbers Within 100</ul>
      </header>
      <body className="App-body">{renderBody()}</body>
    </div>
  );
}

export default App;
