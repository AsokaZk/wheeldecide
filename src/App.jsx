import { useState } from "react";
import "./App.css";
import Wheel from "./WheelComponent";
import InputAutocomplete from "./InputAutocomplete";

function App() {
  const [campWheel, setCampWheel] = useState("");

  return (
    <>
      <h1 className="title">Buscador de equipo</h1>
      <Wheel camper={campWheel} />
      <hr />
      <InputAutocomplete setCampWheel={setCampWheel} />
      {campWheel != "" && (
        <div class="position-relative flag-container">
          <span class="flag-icon position-absolute top-0 translate-middle p-2 bg-success border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </div>
      )}
    </>
  );
}

export default App;
