import React, { useEffect, useState } from "react";
import axios from "axios";
import { setSearch } from "../../actions/actions.js";
// css
import styles from "./AlleNGOer.module.css";
// components
import ListView from "../ui-components/ListView";
import ListItem from "../ui-components/ListItem";
import { connect } from "react-redux";

const AlleNGOer = props => {
  let [initialContent, setInitialContent] = useState([]);
  let [filteredContent, setFilteredContent] = useState([]);

  useEffect(() => {
    return () => {
      props.resetSearchString();
      props.setSearch(false);
    };
  }, []);

  useEffect(() => {
    getContent();
  }, []);

  useEffect(() => {
    if (props.searchString !== "") {
      let thisFilteredContent = initialContent.filter(
        content =>
          content.title
            .toLowerCase()
            .indexOf(props.searchString.toLowerCase()) !== -1
      );
      setFilteredContent(thisFilteredContent);
    } else {
      getContent();
    }
  }, [props.searchString]);

  const getContent = async () => {
    const reqUrl = `http://jenskjr.dk/gennem_gode_gerninger_api/`;
    try {
      let { data } = await axios.get(reqUrl);
      setInitialContent(data);
      setFilteredContent(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {filteredContent.map((content, index) => (
        <ListView key={index}>
          <ListItem
            left={"./media/logos/" + content.logo}
            center={content.title}
            contentId={content.id}
            link={"detailed-list"}
            height="8rem"
            right={true}
          ></ListItem>
        </ListView>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchString: state.searchString
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetSearchString: () => dispatch({ type: "RESETSEARCHSTRING" }),
    setSearch: event => dispatch(setSearch(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlleNGOer);
