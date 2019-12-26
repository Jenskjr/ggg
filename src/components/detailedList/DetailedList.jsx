import React, { useState, useEffect } from "react";
import content from "../../content/content";
import { setSearch } from "../../actions/actions.js";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const DetailedList = props => {
  let [thisContent, setThisContent] = useState([]);

  useEffect(() => {
    getProjects();
    props.resetSearchString();
    props.setSearch(false);
  }, []);

  const getProjects = () => {
    const contentId = window.location.href.split("detailed-list/")[1];
    content.forEach(content => {
      if (contentId.toString() === content.id.toString()) {
        setThisContent(content);
      }
    });
  };

  return (
    <div className={container()}>
      <Link to={`/`}>
        <div className="overview">
          <img src={`./media/logos/${thisContent.logo}`} alt="" />
          <h4>{thisContent.title}</h4>
        </div>
      </Link>

      {!thisContent.projects && (
        <p className="disclamer">
          {props.lang && props.lang.thereAreNoProjectsAtTheMoment}
        </p>
      )}

      {thisContent.projects &&
        thisContent.projects.length &&
        !props.searchString.length &&
        thisContent.projects.map((project, index) => (
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
            <div className="description">
              <Link to={`/details/${thisContent.organizationId}/${project.id}`}>
                <h4>{project.title}</h4>
                <div>{project.description}</div>
              </Link>
            </div>
          </div>
        ))}

      {thisContent.projects &&
        thisContent.projects.length &&
        props.searchString.length &&
        thisContent.projects
          .filter(
            project =>
              project.title.indexOf(props.searchString) !== -1 ||
              project.organization.indexOf(props.searchString) !== -1
          )
          .map((project, index) => (
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
              <div className="description">
                <Link
                  to={`/details/${thisContent.organizationId}/${project.id}`}
                >
                  <h4>{project.title}</h4>
                  <div>{project.description}</div>
                </Link>
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
  }

  .list-item {
    background-color: white;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    margin-bottom: -1px;

    .side-by-side {
      display: flex;
      padding: 1rem;

      .left {
        width: 60%;
        margin-right: 0.8rem;
        overflow-y: hidden;

        img {
          width: 100%;
        }
      }

      .right {
        text-align: center;
        width: 40%;

        h4 {
          padding-bottom: 0.5rem;
        }

        img {
          width: 70%;
        }
      }
    }

    .description {
      padding: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  h4 {
    padding: 0 0 0.2rem 0;
    margin: 0;
    font-weight: normal;
    font-size: 1rem;
  }
`;
export default connect(mapStateToProps, mapDispatchToProps)(DetailedList);
