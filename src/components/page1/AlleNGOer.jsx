import React, { useEffect } from "react";
// css
import styles from "./AlleNGOer.module.css";
// components
import ListView from "../ui-components/ListView";
import ListItem from "../ui-components/ListItem";
import { connect } from "react-redux";
// content
import content from "../../content/content";

const AlleNGOer = props => {
  useEffect(() => {
    props.resetSearchString();
  }, []);

  return (
    <div className={styles.container}>
      {!props.searchString.length &&
        content.map((content, index) => (
          <ListView key={index}>
            <ListItem
              left={"./media/logos/" + content.logo}
              center={content.title}
              contentId={content.id}
              link={"detailed-list"}
              height="8rem"
            ></ListItem>
          </ListView>
        ))}
      {props.searchString.length > 0 &&
        content
          .filter(
            content =>
              content.title
                .toLowerCase()
                .indexOf(props.searchString.toLowerCase()) !== -1
          )
          .map((content, index) => (
            <ListView key={index}>
              <ListItem
                left={"./media/logos/" + content.logo}
                center={content.title}
                contentId={content.id}
                link={"detailed-list"}
                height="8rem"
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
    resetSearchString: () => dispatch({ type: "RESETSEARCHSTRING" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlleNGOer);
