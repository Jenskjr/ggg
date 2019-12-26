import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setSearch } from "../../actions/actions.js";
import TabView from "../ui-components/TabView";
import Page1 from "../page1/AlleNGOer";
import Page2 from "../page2/DevGoals";
import Page3 from "../page3/Categories";

const Frontpage = props => {
  useEffect(() => {
    props.resetSearchString();
    props.setSearch(false);
  }, []);

  const tabs = [
    props.lang && props.lang.NGOs,
    props.lang && props.lang.categories,
    props.lang && props.lang.developmentGoals
  ];
  const content = [<Page1 />, <Page2 />, <Page3 />];
  return (
    <>
      <TabView tabs={tabs} content={content} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    lang: state.lang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetSearchString: () => dispatch({ type: "RESETSEARCHSTRING" }),
    setSearch: event => dispatch(setSearch(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
