import React from "react";
import Buttons from "./ButtonCount";
import imgHomem from "../../img/homem.png";
import "./style.css";

export default function Homem({ count, setCount }) {
  return (
    <div className="counter">
      <div className="div">
        <h3>Homens</h3>
        <img className="imgPessoa" src={imgHomem} alt="Homem" />
        <div>
          <Buttons count={count} setCount={setCount} />
        </div>
      </div>
    </div>
  );
}
