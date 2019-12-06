import React from "react";
import { connect } from "react-redux";

function Reducer(props) {
  console.log(props.action);
  return (
    <pre
      style={{
        textAlign: "left",
        width: "50%",
        color: "grey"
      }}
    >
      <span
        style={props.action === "action" ? {} : { color: "black" }}
      >{`const todoReducer = (state, ${props.action}) => {
        switch (${
          props.action === "action" ? "action" : props.actionObj.type
        }) {`}</span>
      <br />
      <span
        style={
          props.actionObj && props.actionObj.type === "CHANGE_FILTER"
            ? { color: "black" }
            : {}
        }
      >
        {`case "CHANGE_FILTER":
              return { ...state, filter: ${props.actionObj.filter} };`}
      </span>
      <br />
      <span
        style={
          props.actionObj && props.actionObj.type === "TOGGLE_TASK"
            ? { color: "black" }
            : {}
        }
      >{`case "TOGGLE_TASK":
          const taskToChange = state.tasks.find(task => task.id === action.id);
          return {
            ...state,
            tasks: [
              ...state.tasks.filter(task => task.id !== ${props.actionObj.id}),
              { ...taskToChange, done: !taskToChange.done }
            ]
          };`}</span>
      <br />
      <span
        style={
          props.actionObj && props.actionObj.type === "ADD_TODO"
            ? { color: "black" }
            : {}
        }
      >{`case "ADD_TODO":
              return {
                ...state,
                tasks: [
                  ...state.tasks,
                  { id: state.tasks.length + 1, title: ${props.actionObj.todo}, done: false }
                ]
              };`}</span>
    </pre>
  );
}

export default connect(state => state)(Reducer);
