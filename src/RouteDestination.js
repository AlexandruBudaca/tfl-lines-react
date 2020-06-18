import React from "react";
import arrow from "./right.png";

const RouteDestination = ({ destination }) => {
  return (
    <div className="destination">
      {destination.httpStatusCode === 404 ? (
        <div className="destination-route">
          <h4> "Sorry we didn't found any destination"</h4>
        </div>
      ) : (
        <div className="destination">
          <div className="destination-route">
            <div className="destination-point">Start</div>
            <div> {destination.routeSections[0].originationName}</div>
          </div>
          <div>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="destination-route">
            <div className="destination-point">End</div>
            <div>{destination.routeSections[0].destinationName}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default RouteDestination;
