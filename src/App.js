import React from "react";
import "./App.css";
import Tasks from "./containers/Tasks";
import Filter from "./containers/Filter";
import Input from "./containers/Input";
import Reducer from "./containers/Reducer";
import Store from "./containers/Store";
import Dispatch from "./containers/Dispatch";
import Arrow from "./components/Arrow";

function App() {
  return (
    <div className="App" style={{ marginTop: 75 }}>
      <Input />
      <br />
      <Filter />
      <Tasks />
      <Dispatch />
      <div style={{ margin: 72, display: "flex" }}>
        <Reducer />
        <Store />
      </div>
    </div>
  );
}

export default App;
