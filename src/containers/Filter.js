import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  filter: state.filter
});

const Filters = ({ filter, dispatch }) => (
  <select
    value={filter}
    onChange={e => {
      const action = {
        type: "CHANGE_FILTER",
        filter: e.target.value
      };
      dispatch(action);
      dispatch({
        type: "SET_ACTION",
        action: `{
        type: "CHANGE_FILTER",
        filter: ${e.target.value}
      }`,
        actionObj: action
      });
    }}
  >
    <option value="SHOW_ALL">Show all</option>
    <option value="SHOW_TODO">Show todo</option>
    <option value="SHOW_DONE">Show done</option>
  </select>
);

export default connect(mapStateToProps)(Filters);
