import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/semana01">Atividade Semana 01</Link>
          </li>
          <li>
            <Link to="/semana02">Atividade Semana 02</Link>
          </li>
          <li>
            <Link to="/semana03">Atividade Semana 03</Link>
          </li>
          <li>
            <Link to="/semana04">Atividade Semana 04</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;