import React, { useState } from "react";
import { css } from "emotion";
import { SmileyIcon } from "mdi-react";

const AddToHomeScreen = props => {
  const [open, setOpen] = useState(true);

  const timeDelay = delay => {
    setTimeout(() => setOpen(false), delay);
  };

  return (
    <>
      {open && (
        <div className={container()}>
          Install this webapp on your iPhone: tab{" "}
          <img src="./media/icons/icon_apple_homescreen.png" alt="" />
          and then add to homeScreen.
          {timeDelay(10000)}
        </div>
      )}
    </>
  );
};

const container = () => css`
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;
  overflow: auto;
  background-color: whiteSmoke;
  border: 1px solid lightGrey;
  animation: 1s ease-out 0s 1 slideInFromBttom;
  color: grey;
  padding: 1rem;

  img {
    width: 20px;
    margin-left: 2px;
    margin-right: 5px;
    margin-bottom: -5px;
  }
`;

export default AddToHomeScreen;
