import React from "react";
import { connect } from "react-redux";
import { incerement } from "../JS/actions/count";
const Counter = (props) => {
  return (
    <div>
      <h1>this is Counter Component</h1>
      <button onClick={props.increment}>+</button>
      <h2>{props.x}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    x: state.countReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incerement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
