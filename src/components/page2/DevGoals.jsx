import React, { useEffect } from "react";
import { connect } from "react-redux";
// css
import styles from "./DevGoals.module.css";

const TidligereSoegte = props => {
  useEffect(() => {
    props.resetSearchString();
  }, []);

  return <div className={styles.container}></div>;
};

const mapDispatchToProps = dispatch => {
  return {
    resetSearchString: () => dispatch({ type: "RESETSEARCHSTRING" })
  };
};

export default connect(null, mapDispatchToProps)(TidligereSoegte);
