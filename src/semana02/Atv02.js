import { useState } from "react";
import "./Atv02.css"
import { Link } from "react-router-dom";
import Homem from "./cont/Homem";
import Mulher from "./cont/Mulher";

export default function Atv02() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const reset = () => {
    setHomens(0);
    setMulheres(0);
  };
  return (
    <>
    <Link to="/">Retornar a página inicial.</Link>
      <div className="totalAtv02">
        <h1>Atividade 2</h1>
        <button className="reset" onClick={reset}>
          Redefinir
        </button>

        <div className="Atv02">
          <div className="total">
            <h2>Total</h2>
            <h3>{homens + mulheres}</h3>
          </div>
        </div>
        <div className="pessoa">
          <div className="Homem">
            <Homem count={homens} setCount={setHomens} />
          </div>
          <div className="Mulher">
            <Mulher count={mulheres} setCount={setMulheres} />
          </div>
        </div>
      </div>
    </>
  );
}
