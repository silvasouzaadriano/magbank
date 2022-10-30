import React from "react";

const AccordionToggle = ({ children, handleOnClick}) => {
  return (
      <button
        className="btn btn-link"
        type="button"
        style={{ backgroundColor: "unset" }}
        onClick={handleOnClick}
      >
      {children}
      </button>
  );
}

export default AccordionToggle;