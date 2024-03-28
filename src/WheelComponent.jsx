import { useState } from "react";
import Congrats from "./Congrats";
import WheelDecide from "./WheelDecide";

export default function Wheel(props) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#FFFFFF");

  const onFinished = (winner, camp, colorName, color) => {
    if (camp != []) {
      setName(`${camp.name}: Casa de ${winner} (${colorName})`);
      setColor(color);
    }
  };
  return (
    <div className="whee">
      <Congrats name={name} setName={setName} color={color} />
      <WheelDecide camper={props.camper} onFinished={onFinished} />
    </div>
  );
}
