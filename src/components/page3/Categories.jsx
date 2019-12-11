import React from "react";
import { connect } from "react-redux";
// css
import styles from "./Categories.module.css";

const StoettetFoer = (props, { count, dispatch }) => {
  return <div className={styles.container}></div>;
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoettetFoer);
