import React from "react";
import WheelComponent from "react-wheel-of-prizes";

function WheelDecide(props) {
  const segments = ["SALOMON", "SANSON", "GEDEON", "DAVID"];
  const segColorsName = ["Rojo", "Naranja", "Celeste", "Verde"];
  const segColors = ["#EE4040", "#FF9F33", "#3DA5E0", "#34A24F"];
  function getColorName(winner) {
    const ind = segments.indexOf(winner);
    return segColorsName[ind];
  }
  function getColor(winner) {
    const ind = segments.indexOf(winner);
    return segColors[ind];
  }
  return (
    <div key={props.camper}>
      {props.camper != "" ? (
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment={props.camper.house || "GEDEON"}
          onFinished={(winner) =>
            props.onFinished(
              winner,
              props.camper,
              getColorName(winner),
              getColor(winner)
            )
          }
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
          onFinished={(winner) =>
            props.onFinished(
              winner,
              props.camper,
              getColorName(winner),
              getColor(winner)
            )
          }
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
