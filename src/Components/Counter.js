import React from "react";
import { connect } from "react-redux";
import { increment } from "../JS/actions/count";
const Counter = (props) => {
  return (
    <div>
      <h1>this is Counter Component without Hooks</h1>
      <button onClick={props.increment}>+</button>
      <h2>{props.x}</h2>
    </div>
  );
};
// mapStateToProps function that takes the state
// from the globalstate and passwhat we want to the component as a props
const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count,
  };
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
