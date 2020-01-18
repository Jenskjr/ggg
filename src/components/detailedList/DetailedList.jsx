import React, { useState, useEffect } from "react";
import axios from "axios";
import { setSearch } from "../../actions/actions.js";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ChevronLeftIcon } from "mdi-react";

const DetailedList = props => {
  let [thisContent, setThisContent] = useState([]);
  let [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    props.resetSearchString();
    props.setSearch(false);
    getContent();
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
    //const reqUrl = `http://jenskjr.dk/gennem_gode_gerninger_api/`;
    const reqUrl = `http://test-env.eeimg4gnv9.us-east-2.elasticbeanstalk.com/all`;
    try {
      let { data } = await axios.get(reqUrl);
      const contentId = window.location.href.split("detailed-list/")[1];
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
            <div className="side-by-side">
              <div className="left">
                <div className="one">
                  <Link
                    to={`/details/${thisContent.organizationId}/${project.id}`}
                  >
                    <img src={`./media/images/${project.image}`} alt="" />
                  </Link>
                </div>
              </div>
              <div className="right">
                <h4>Støttet af:</h4>
                <a
                  href={thisContent.projects[index].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={"./media/logos/supporters/" + project.logo}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="description-container">
              <div className="description">
                <Link
                  to={`/details/${thisContent.organizationId}/${project.id}`}
                >
                  <h4>{project.title}</h4>
                  <div>{project.description}</div>
                </Link>
              </div>
            </div>
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

  .list-item {
    background-color: white;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    margin-bottom: -1px;

    .side-by-side {
      display: flex;

      .left {
        width: calc(60% - 2rem);
        overflow-y: hidden;
        padding: 1rem 1rem 1.5rem 1rem;

        img {
          width: 100%;
        }
      }

      .right {
        text-align: center;
        width: calc(40% - 2rem);
        padding: 1rem 1rem 1.5rem 1rem;

        h4 {
          padding-bottom: 1rem;
        }

        img {
          width: 70%;
        }
      }
    }

    .description {
      padding: 0 1rem 1.5rem 1rem;
      line-height: 1.2rem;

      @media all and (min-width: 769px) {
        width: calc(60% - 2rem);
      }
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
