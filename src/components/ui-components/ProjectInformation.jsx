import React from "react";
import { Link } from "react-router-dom";
// css
import { css } from "emotion";

const ProjectInformation = props => {
  return (
    <div className={container()}>
      <div className="side-by-side">
        <div className="left">
          <div className="one">
            <Link
              to={`/details/${props.project.organizationId}/${props.project.id}`}
            >
              <img src={`./media/images/${props.project.image}`} alt="" />
            </Link>
          </div>
        </div>
        <div className="right">
          <a href={props.project.url} target="_blank" rel="noopener noreferrer">
            <img
              src={"./media/logos/supporters/" + props.project.logo}
              alt=""
            />
          </a>
          <h4>Fordobler beløbet</h4>
        </div>
      </div>
      <div className="description-container">
        <div className="description">
          <Link
            to={`/details/${props.project.organizationId}/${props.project.id}`}
          >
            <h4>{props.project.title}</h4>
            <div>{props.project.description}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const container = () => css`
  background-color: white;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  margin-bottom: -1px;

  .side-by-side {
    display: flex;

    .left {
      width: 60%;
      overflow-y: hidden;
      padding: 1.5rem 0 0.5rem 1rem;

      img {
        width: 100%;
      }
    }

    .right {
      text-align: center;
      width: calc(40% - 2rem);
      padding: 1.5rem 0.5rem 1rem 0.5rem;
      /*
      margin: 1.5rem 1rem 1rem 1rem;
      border: 1px solid lightgrey;
      */

      h4 {
        padding: 1rem 0 1rem 0;
        font-size: 1rem;
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
`;

export default ProjectInformation;
