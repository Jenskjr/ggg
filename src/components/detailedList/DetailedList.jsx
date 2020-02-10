import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//config
import { getBaseUrl } from "../../config";
// actions
import { setSearch } from "../../actions/actions.js";
// css
import { css } from "emotion";
import { ChevronLeftIcon } from "mdi-react";
//components
import ProjectInformation from "../ui-components/ProjectInformation";

const DetailedList = props => {
  let [thisContent, setThisContent] = useState([]);
  let [filteredProjects, setFilteredProjects] = useState([]);
  const baseUrl = getBaseUrl();

  useEffect(() => {
    props.resetSearchString();
    props.setSearch(false);
    getContent();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (thisContent.projects && props.searchString !== "") {
      let filteredContent = thisContent.projects.filter(
        project =>
          project.title
            .toLowerCase()
            .indexOf(props.searchString.toLowerCase()) !== -1 ||
          project.organization
            .toLowerCase()
            .indexOf(props.searchString.toLowerCase()) !== -1 ||
          project.description
            .toLowerCase()
            .indexOf(props.searchString.toLowerCase()) !== -1
      );
      setFilteredProjects(filteredContent);
    } else {
      getContent();
    }
  }, [props.searchString]);

  const getContent = async () => {
    const contentId = window.location.href.split("detailed-list/")[1];
    const reqUrl = `${baseUrl}/projects/${contentId}`;

    try {
      let { data } = await axios.get(reqUrl);

      data.forEach(content => {
        if (contentId.toString() === content.id.toString()) {
          setThisContent(content);
          setFilteredProjects(content.projects);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={container()}>
      <Link to={`/`}>
        <div className="overview">
          <ChevronLeftIcon />
          <img src={`./media/logos/${thisContent.logo}`} alt="" />
          <h4>{thisContent.title}</h4>
        </div>
      </Link>

      {!filteredProjects && (
        <p className="disclamer">
          {props.lang && props.lang.thereAreNoProjectsAtTheMoment}
        </p>
      )}
      {filteredProjects &&
        filteredProjects.map((project, index) => (
          <div key={index} className="list-item">
            <ProjectInformation
              content={thisContent}
              project={project}
              index={index}
            />
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lang: state.lang,
    searchString: state.searchString
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetSearchString: () => dispatch({ type: "RESETSEARCHSTRING" }),
    setSearch: event => dispatch(setSearch(event))
  };
};

const container = () => css`
  font-size: 0.8rem;

  .header {
    display: flex;
  }

  .disclamer {
    text-align: center;
    padding: 1rem;
    height: 100vh;
  }

  .overview {
    background-color: white;
    display: flex;
    margin: 1rem 0 1rem 0;
    padding: 0.5rem 0.75rem;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    height: 2rem;
    align-items: center;

    img {
      max-height: 100%;
      padding-right: 1rem;
    }

    svg {
      padding-right: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  h4 {
    padding: 0 0 0.5rem 0;
    margin: 0;
    font-weight: normal;
    font-size: 1rem;
  }
`;
export default connect(mapStateToProps, mapDispatchToProps)(DetailedList);
