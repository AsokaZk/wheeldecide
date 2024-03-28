import React from "react";
import logo from "./assets/confeti.gif";

function Congrats(props) {
  return (
    <div>
      {props.name != "" && (
        <div className="congrats" onClick={() => props.setName("")}>
          <>
            <img src={logo} alt="loading..." className="confeti" />
            <h1 className="winner" style={{ color: props.color }}>
              {props.name}
            </h1>
          </>
        </div>
      )}
    </div>
  );
}

export default Congrats;
