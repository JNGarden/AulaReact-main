import React from "react";
import Buttons from "./ButtonCount";
import imgMulher from "../../img/mulher.png";
import "./style.css";

export default function Mulher({ count, setCount }) {
  return (
    <div className="counter">
      <div className="div">
        <h3>Mulheres</h3>
        <img className="imgPessoa" src={imgMulher} alt="Mulher" />
        <div>
          <Buttons count={count} setCount={setCount} />
        </div>
      </div>
    </div>
  );
}
