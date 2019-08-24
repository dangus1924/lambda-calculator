import React { useState } from "react";
import { Specials } from "../../../data";
import SpecialButton from "./SpecialButton"
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [special, setSpecial] = useState(specials)

  return (
    <div className="specials">
      {special.map((special, index) =>
        <SpecialButton
        key={index}
        text={special}
        value={special}
        clearDisplay={props.clearDisplay}/>
        )}
    </div>
  );
};

export default Specials;
