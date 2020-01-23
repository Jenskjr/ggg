import React, { useState, useEffect } from "react";
import axios from "axios";
//css
import { css } from "emotion";
//components
import Login from "./Login";

const Admin = () => {
  const [formData, setFormData] = useState([]);
  const [validForm, setValidForm] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [account, setAccount] = useState([]);

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
    validForm && handleLogin();
  };

  // login
  const handleLogin = async () => {
    try {
      const baseUrl =
        "http://test-env.eeimg4gnv9.us-east-2.elasticbeanstalk.com";
      //"http://localhost:8081";
      const reqUrl = `${baseUrl}/auth`;
      let { data } = await axios.get(reqUrl, {
        headers: { userName: formData.userName, token: formData.password }
      });
      setAccount(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(true);
    }
  };

  const checkLogin = async () => {
    // route
    // data
    // return true or false
  };

  return (
    <div className={container()}>
      <h1>Admin page</h1>
      {!account.id && (
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
      {account.id && `Hi ${account.name}`}
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
