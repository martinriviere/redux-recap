import React from "react";
import { connect } from "react-redux";

function Input({ dispatch }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const inputElt = document.getElementById("input");
        if (inputElt.value !== "") {
          const action = {
            type: "ADD_TODO",
            todo: inputElt.value
          };
          dispatch(action);
          dispatch({
            type: "SET_ACTION",
            action: `{
            type: "ADD_TODO",
            todo: ${inputElt.value}
          }`,
            actionObj: action
          });
        }
        inputElt.value = "";
      }}
    >
      <input id="input" type="text" />
    </form>
  );
}

export default connect()(Input);
