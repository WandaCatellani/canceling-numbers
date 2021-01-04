import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [error, setError] = useState(false);

  const apretarTecla = e => {
    e.stopPropagation();
    console.log(e.key);
    // console.log(e.keyCode)

    if (e.keyCode >= 65 && e.keyCode <= 90) {
      console.log("Sos una letra minuscula");
    } else {
      setError(true);
      e.preventDefault();
      console.log("Sos otro caracter");
    }
  };
  return (
    <div>
      <h1>Hola Mundo!</h1>
      <input onKeyDown={apretarTecla} />
      <p>{error ? "No se pueden escribir numeros" : null}</p>
    </div>
  );
}
