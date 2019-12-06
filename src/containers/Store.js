import React from "react";
import { connect } from "react-redux";

function Store({ tasks, filter }) {
  return (
    <div style={{ textAlign: "left", width: "50%" }}>
      <pre>
        {`store.state = {
  filter: "${filter}",
  tasks: [
    ${tasks.map(
      task =>
        `  {id: ${task.id}, title: "${task.title}", done: ${task.done}}, \n`
    )}
  ]
}`}
      </pre>
    </div>
  );
}

export default connect(state => state)(Store);
