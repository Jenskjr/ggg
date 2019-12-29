import React from "react";
import { css } from "emotion";

const RadioInput = props => {
  return (
    <div className={` ${container()} sliderContainer`}>
      <input
        type="range"
        id="slider"
        className={container()}
        name={props.name}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.onChange}
      />
      <span className="checkmark"></span>
    </div>
  );
};

const container = () => css`
  #slider {
    margin-right: 1rem;
    -webkit-appearance: none !important;
    height: 3px;
    width: 100%;
    -webkit-transform: translate3d(0px, 0px, 0px);
    margin-top: 10px;
    cursor: pointer;
    background: #e30a0b;
  }

  #slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #e30a0b;
    cursor: pointer;
  }

  #slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
`;

export default RadioInput;
