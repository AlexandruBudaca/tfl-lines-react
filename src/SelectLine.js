import React from "react";

const SelectLine = ({ singleModeData, handleSelectValue, setOptionLine }) => {
  return (
    <div>
      {singleModeData.length === 0 ? (
        ""
      ) : (
        <div className="select-mode">
          <select
            defaultValue="default"
            onChange={(e) => {
              handleSelectValue(e, setOptionLine);
            }}
          >
            <option value="default">Select line</option>

            {singleModeData.map((transport) => (
              <option value={transport.name} key={transport.id}>
                {transport.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
export default SelectLine;
