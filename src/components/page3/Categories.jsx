import React, { useEffect } from "react";
import { connect } from "react-redux";
// css
import styles from "./Categories.module.css";

const StoettetFoer = props => {
  useEffect(() => {
    props.resetSearchString();
  }, []);

  return <div className={styles.container}></div>;
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetSearchString: () => dispatch({ type: "RESETSEARCHSTRING" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoettetFoer);
