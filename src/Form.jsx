import React, { useState } from "react";
import lista from "./campistas";

function Form(props) {
  const [name, setName] = useState("");

  const filterName = (campista) => {
    const campero = Object.entries(lista).filter((camp) => {
      return camp[0].toLowerCase() == campista.toLowerCase();
    });
    if (campero.length > 0) {
      console.log(campero);
      props.setCampWheel(campero[0]);
    }
  };

  return (
    <>
      <div className="input-group">
        <input
          className="form-control input-wheel"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn btn-primary btn-lg"
          type="submit"
          onClick={() => filterName(name)}
        >
          Registrar
        </button>
        <button
          className="btn btn-secondary btn-lg"
          onClick={() => {
            setName("");
            props.setCampWheel("");
          }}
        >
          Borrar
        </button>
      </div>
    </>
  );
}

export default Form;
