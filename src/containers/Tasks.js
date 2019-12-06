import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({ tasks: state.tasks, filter: state.filter });

function Tasks({ tasks, filter, dispatch }) {
  return (
    <ul style={{ listStyle: "none", marginLeft: -34 }}>
      {tasks
        .filter(task => {
          switch (filter) {
            case "SHOW_ALL":
              return true;
            case "SHOW_TODO":
              return !task.done;
            case "SHOW_DONE":
              return task.done;
            default:
              return true;
          }
        })
        .sort((a, b) => a.id - b.id)
        .map(task => (
          <li key={task.id}>
            {task.title + " "}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => {
                const action = { type: "TOGGLE_TASK", id: task.id };
                dispatch(action);
                dispatch({
                  type: "SET_ACTION",
                  action: `{
                    type: "TOGGLE_TASK",
                    id: ${task.id}
                  }`,
                  actionObj: action
                });
              }}
            />
          </li>
        ))}
    </ul>
  );
}

export default connect(mapStateToProps)(Tasks);
