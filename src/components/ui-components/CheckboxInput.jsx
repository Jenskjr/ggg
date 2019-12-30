import React from "react";
import { css } from "emotion";

const CheckboxInput = props => {
  return (
    <div className={container()}>
      <label className="container">
        Få støttefradrag
        <input
          type="checkbox"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          checked={props.checked}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

const container = () => css`
  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.5rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fef3f4;
    border: 0;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    /*background-color: #ccc;*/
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #e30a0b;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default CheckboxInput;
