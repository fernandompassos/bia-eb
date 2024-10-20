import React from "react";
import { Link } from "react-router-dom";
import DadosHenrylle from "./DadosHenrylle";
const About = () => {
  return (
    <div>
      <h4>Versão 3.0.0  - usando script, EB cli direto pelo SSM..</h4>
      <h5>BIA 20 de Outubro/2024 - domingão.</h5>
      <Link to="/">Voltar</Link>
      <DadosHenrylle />
    </div>
  );
};

export default About;
