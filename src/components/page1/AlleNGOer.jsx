import React, { useEffect, useState } from "react";
// css
import styles from "./AlleNGOer.module.css";
// components
import ListView from "../ui-components/ListView";
import ListItem from "../ui-components/ListItem";
import { connect } from "react-redux";
// content
import content from "../../content/content";

const AlleNGOer = props => {
  let [initialContent, setInitialContent] = useState([]);
  let [filteredContent, setFilteredContent] = useState([]);

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

  const getContent = () => {
    setInitialContent(content);
    setFilteredContent(content);
  };

  return (
    <div className={styles.container}>
      {console.log(filteredContent)}
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

export default connect(mapStateToProps)(AlleNGOer);
