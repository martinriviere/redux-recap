import React from "react";
import { connect } from "react-redux";

function Reducer(props) {
  console.log(props.action);
  return (
    <pre
      style={{
        textAlign: "left",
        width: "60%",
        color: "grey"
      }}
    >
      <span
        style={props.action === "action" ? {} : { color: "black" }}
      >{`const todoReducer = (state, ${props.action}) => {
        switch (${
          props.action === "action" ? "action" : props.actionObj.type
        }) {`}</span>

      <pre
        style={
          props.actionObj && props.actionObj.type === "CHANGE_FILTER"
            ? { color: "black", paddingLeft: 100 }
            : { paddingLeft: 100 }
        }
      >
        {`case "CHANGE_FILTER":
    return { ...state, filter: ${props.actionObj.filter} };`}
      </pre>

      <pre
        style={
          props.actionObj && props.actionObj.type === "TOGGLE_TASK"
            ? { color: "black", paddingLeft: 100 }
            : { paddingLeft: 100 }
        }
      >{`case "TOGGLE_TASK":
    const taskToChange = state.tasks.find(task => task.id === action.id);
    return {
      ...state,
      tasks: [
        ...state.tasks.filter(task => task.id !== ${props.actionObj.id}),
        { ...taskToChange, done: !taskToChange.done }
      ]
    };`}</pre>

      <pre
        style={
          props.actionObj && props.actionObj.type === "ADD_TODO"
            ? { color: "black", paddingLeft: 100 }
            : { paddingLeft: 100 }
        }
      >{`case "ADD_TODO":
    return {
      ...state,
      tasks: [
        ...state.tasks,
        { id: state.tasks.length + 1, title: ${props.actionObj.todo}, done: false }
      ]
    };`}</pre>
    </pre>
  );
}

export default connect(state => state)(Reducer);
