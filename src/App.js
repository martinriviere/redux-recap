import React from "react";
import "./App.css";
import Tasks from "./containers/Tasks";
import Filter from "./containers/Filter";
import Input from "./containers/Input";
import Reducer from "./containers/Reducer";
import Store from "./containers/Store";

function App() {
  return (
    <div className="App">
      <Input />
      <br />
      <Filter />
      <Tasks />
      <div style={{ margin: 72, display: "flex" }}>
        <Reducer />
        <Store />
      </div>
    </div>
  );
}

export default App;
