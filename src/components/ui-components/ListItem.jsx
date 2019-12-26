import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import { SmileyIcon, ArrowRightIcon, ChevronRightIcon } from "mdi-react";

const ListItem = props => {
  return (
    <div
      style={{ height: `${props.height ? props.height : ""}` }}
      className={container(props)}
    >
      <Link className="content" to={`/${props.link}/${props.contentId}`}>
        <div className="left">
          <img src={props.left} alt="" />
        </div>
        <div className="center">{props.center}</div>

        {props.right && (
          <div className="right">
            <ChevronRightIcon />
          </div>
        )}
      </Link>
    </div>
  );
};

const container = props => css`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  margin-bottom: -1px;
  display: flex;

  a {
    text-decoration: none;
    color: black;
  }

  .content {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .left {
    padding: 1rem;
    width: 5rem;
    img {
      max-height: 100%;
      max-width: 90%;
    }
  }

  .center {
    padding: 1rem;
  }

  .right {
    margin-left: auto;
    margin-right: 1rem;

    svg {
      color: grey;
    }
  }
`;

export default ListItem;
