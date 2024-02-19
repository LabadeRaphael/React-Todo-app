import React from "react";

const Button = ({ name, myFunc, myStyle }) => {
  return (
    <button type="button" onClick={myFunc} className={myStyle}>
      {name}
    </button>
  );
};

export default Button;
