import React from "react";
import WheelComponent from "react-wheel-of-prizes";

function WheelDecide(props) {
  const segments = ["Salomon", "San Son", "Gedeon", "David"];
  const segColors = ["#EE4040", "#FF9F33", "#3DA5E0", "#34A24F"];

  return (
    <div key={props.camper}>
      {props.camper != "" ? (
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment={props.camper[1] || "Gedeon"}
          onFinished={(winner) => props.onFinished(winner, props.camper)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={290}
          upDuration={200}
          downDuration={1000}
          fontFamily="Arial"
        />
      ) : (
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => props.onFinished(winner, props.camper)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={290}
          upDuration={200}
          downDuration={1000}
          fontFamily="Arial"
        />
      )}
    </div>
  );
}

export default WheelDecide;
