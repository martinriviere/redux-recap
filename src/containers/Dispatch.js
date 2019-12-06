import React from "react";
import { connect } from "react-redux";

function Dispatch({ action }) {
  return (
    <div
      style={{ marginTop: 72, color: action === "action" ? "grey" : "black" }}
    >
      <code>dispatch({action})</code>
    </div>
  );
}

export default connect(state => state)(Dispatch);
