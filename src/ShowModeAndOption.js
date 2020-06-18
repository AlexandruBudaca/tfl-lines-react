import React from "react";

const ShowModeAndOption = ({ modesName, optionLine }) => {
  return (
    <div className="mode-option">
      <h4>
        {modesName.toLocaleUpperCase()} {optionLine === "" ? "" : ":"}{" "}
        {optionLine}{" "}
      </h4>
    </div>
  );
};
export default ShowModeAndOption;
