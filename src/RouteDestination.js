import React from "react";

const RouteDestination = ({ err, destination }) => {
  return (
    <div>
      {!err ? (
        <div>
          <h4> "Sorry we didn't found any destination"</h4>
        </div>
      ) : (
        <div>
          <div>Start{destination.routeSections[0].originationName}</div>
          <div>End{destination.routeSections[0].destinationName}</div>
        </div>
      )}
    </div>
  );
};
export default RouteDestination;
