import React from "react";

function InputBox({ inputProp }) {
  return (
    <div className="input">
      <input id={inputProp.id} type={inputProp.type} className="input__element" placeholder=" " />
      <label className="input__label" htmlFor={inputProp.id}>
        {inputProp.labelName}
      </label>
    </div>
  );
}

export default InputBox;
