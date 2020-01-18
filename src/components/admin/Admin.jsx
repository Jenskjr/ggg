import React, { useState, useEffect } from "react";
import { css } from "emotion";
//components
import Login from "./Login";

const Admin = () => {
  const [formData, setFormData] = useState([]);
  const [validForm, setValidForm] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleFormChange = e => {
    setSubmitted(false);
    setErrorMessage(false);
    setValidForm(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.userName && formData.password) setValidForm(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (validForm && checkLogin()) {
      setSignedIn(true);
    } else if (validForm) setErrorMessage(true);
  };

  const checkLogin = async () => {
    // route
    // data
    // return true or false
  };

  return (
    <div className={container()}>
      <h1>Admin page</h1>
      {!signedIn && (
        <Login
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
          userName={formData.userName}
          password={formData.password}
          submitted={submitted}
          errorMessage={errorMessage}
          //unsetErrorMessageLogIn={setErrorMessage(false)}
        />
      )}
      {signedIn && `Hi ${formData.userName}`}
    </div>
  );
};

const container = () => css`
  background-color: white;
  border-bottom: 1px solid lightgrey;

  h1 {
    text-align: center;
  }
`;

export default Admin;
