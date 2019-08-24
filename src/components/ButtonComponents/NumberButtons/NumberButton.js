import React from "react";

const NumberButton = (props) => {

  return (
    <button className="numButton"
      oneClick={() =>
      props.adddNumber(props.text)}>
        {props.text}      
    </button>
  );
};

export default NumberButton;