import React from "react";
import { css } from "emotion";

const CheckboxInput = props => {
  return (
    <div className={`${container()} checkbox-example`}>
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label>Få støttefradrag</label>
    </div>
  );
};

const container = () => css`
  font-weight: bold;

  input[type="checkbox"] {
    // visibility: hidden;
  }
`;

export default CheckboxInput;
