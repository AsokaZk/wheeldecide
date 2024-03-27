import { useState } from "react";
import Congrats from "./Congrats";
import WheelDecide from "./WheelDecide";

export default function Wheel(props) {
  const [name, setName] = useState("");

  const onFinished = (winner, camp) => {
    if (camp != []) {
      setName(`${camp[0]}: Equipo ${winner}`);
    }
  };
  return (
    <div className="whee">
      <Congrats name={name} setName={setName} />
      <WheelDecide camper={props.camper} onFinished={onFinished} />
    </div>
  );
}
