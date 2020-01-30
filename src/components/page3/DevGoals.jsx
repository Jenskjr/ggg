import React, { useState, useEffect } from "react";
import axios from "axios";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//config
import { getBaseUrl } from "../../config";
// Actions
import { setUrlhistory } from "../../actions/actions.js";
import { setSelectedDevelopmentGoal } from "../../actions/actions.js";
// components
import Select from "../ui-components/Select";

const DevGoals = props => {
  const [developmentGoals, setDevelopmentGoals] = useState([]);
  const [content, setContent] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const baseUrl = getBaseUrl();

  useEffect(() => {
    getDevelopmentGoals();
    getAllProjects();
    props.setUrlHistory([...props.urlHistory, window.location.href]);
  }, []);

  useEffect(() => {
    content.length > 0 && props.selectedDevelopmentGoal && filterContent();
  }, [content, props.selectedDevelopmentGoal]);

  const getDevelopmentGoals = async () => {
    const reqUrl = `${baseUrl}/developmentgoals`;

    try {
      let { data } = await axios.get(reqUrl);
      setDevelopmentGoals(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProjects = async () => {
    const reqUrl = `${baseUrl}/allProjects`;

    try {
      let { data } = await axios.get(reqUrl);
      setContent(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setFilteredProjects([]);
    props.setSelectedDevelopmentGoal(e);
  };

  const filterContent = e => {
    let thisFilteredProjects = [];
    content.forEach(thisContent => {
      // find project
      thisContent.projects &&
        thisContent.projects.forEach(project => {
          project.devGoals.forEach(devGoal => {
            if (
              devGoal.toString() === props.selectedDevelopmentGoal.toString()
            ) {
              thisFilteredProjects = [...thisFilteredProjects, project];
            }
          });
        });
    });
    setFilteredProjects(thisFilteredProjects);
  };

  return (
    <div className={container()}>
      <Select
        options={developmentGoals}
        handleChange={handleChange}
        selectedValue={props.selectedDevelopmentGoal}
      />

      {!props.selectedDevelopmentGoal && (
        <div className="development-goals">
          <h2>Vælg et af de 17 verdensmål fra listen.</h2>
          <img src="./media/logos/dev-goals/all_17.png" alt="" />
        </div>
      )}
      {filteredProjects.length > 0 &&
        props.selectedDevelopmentGoal &&
        filteredProjects.map((project, index) => (
          <div key={index} className="list-item">
            <div className="side-by-side">
              <div className="left">
                <div className="one">
                  <Link to={`/details/${project.organizationId}/${project.id}`}>
                    <img src={`./media/images/${project.image}`} alt="" />
                  </Link>
                </div>
              </div>
              <div className="right">
                <h4>Støttet af:</h4>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={"./media/logos/supporters/" + project.logo}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="description-container">
              <div className="description">
                <Link to={`/details/${project.organizationId}/${project.id}`}>
                  <h4>{project.title}</h4>
                  <div>{project.description}</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      {filteredProjects.length === 0 && props.selectedDevelopmentGoal && (
        <div className="error-message">
          <h3>Der er desværre ingen projekter i denne kategori</h3>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    urlHistory: state.urlHistory,
    selectedDevelopmentGoal: state.selectedDevelopmentGoal,
    tabIndex: state.tabIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUrlHistory: value => dispatch(setUrlhistory(value)),
    setSelectedDevelopmentGoal: e => dispatch(setSelectedDevelopmentGoal(e))
  };
};

const container = () => css`
  font-size: 0.8rem;
  height: 100vh;

  .development-goals {
    text-align: center;
    padding: 2rem;

    img {
      max-width: 100%;
    }

    h2 {
      padding-bottom: 1rem;
    }
  }

  .error-message {
    text-align: center;
    padding: 2rem;
  }

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

  /*select*/
  .select-css {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    /*background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);*/
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
  }
  .select-css::-ms-expand {
    display: none;
  }
  .select-css:hover {
    border-color: #888;
  }
  .select-css:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  .select-css option {
    font-weight: normal;
  }

  body {
    padding: 3rem;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(DevGoals);
