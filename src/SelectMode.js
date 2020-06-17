import React from "react";

const SelectMode = ({ data, modesName, handleSelectValue, setModesName }) => {
  return (
    <div className="select-mode">
      <select
        defaultValue="default"
        onChange={(e) => {
          handleSelectValue(e, setModesName);
        }}
      >
        <option value="default" disabled>
          Select mode
        </option>
        {data.map((mode, index) => (
          <option key={index} value={mode.modeName}>
            {mode.modeName}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectMode;
