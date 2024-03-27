import { useState } from "react";
import "./App.css";
import Wheel from "./WheelComponent";
import Form from "./Form";

function App() {
  const [campWheel, setCampWheel] = useState("");

  return (
    <>
      <h1 className="title">Buscador de equipo</h1>
      <Wheel camper={campWheel} />
      <hr />
      <Form setCampWheel={setCampWheel} />
    </>
  );
}

export default App;
