import React from "react";

const RouteDestination = ({ destination }) => {
  return (
    <div>
      <div>Start{destination.routeSections[0].originationName}</div>
      <div>End{destination.routeSections[0].destinationName}</div>
    </div>
  );
};
export default RouteDestination;
