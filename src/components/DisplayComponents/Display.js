import React from "react";

const Display = (props) => {

  return <div className = "display">{/* Display any props data here */}
    <p className="output">
      {props.number}
    </p>
  </div>;
};

export default Display;