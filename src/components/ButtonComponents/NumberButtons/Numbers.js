import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton"

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state

  const [number, setNumber] = useStatre(numbers)
  return (
    <div className="numbers">      
        {numbers.map((number, index) =>
          <NumberButton
          key={index}
          text={number}
          value={number}
          addNumber={props.addNumber}
          />)}      
    </div>
  );
};

export default Numbers;