import React, { useState } from "react";
// css
import { AccountIcon, ErrorIcon } from "mdi-react";
import { css } from "emotion";
// components
import FormButton from "./../ui-components/FormButton";
import TextInput from "./../ui-components/TextInput";
import Warning from "./../ui-components/Warning";

const Login = props => {
  return (
    <div className={container()}>
      <form>
        <h2>Brugernavn</h2>
        <TextInput
          name="userName"
          value={props.userName}
          handleChange={props.handleFormChange}
          initText="Brugernavn"
        />
        {!props.userName && props.submitted && (
          <Warning validationText={"Navn mangler at blive udfyldt"} />
        )}
        <h2>Kodeord</h2>
        <TextInput
          name="password"
          value={props.password}
          handleChange={props.handleFormChange}
          initText="Kodeord"
        />
        {!props.password && props.submitted && (
          <Warning validationText={"Password mangler at blive udfyldt"} />
        )}
        <FormButton
          label="Log ind"
          style={{ marginTop: "1rem" }}
          handleSubmit={e => {
            props.handleSubmit(e);
          }}
        />
        {props.errorMessage && (
          <p className="error-message">
            <ErrorIcon />
            Brugernavn eller password er ikke korrekt
          </p>
        )}
      </form>
    </div>
  );
};

const container = () => css`
  padding: 2rem;
  max-width: 20rem;
`;

export default Login;
