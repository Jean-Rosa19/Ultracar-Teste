import React, { useState } from "react";
import QRCode from "react-qr-code";
import FormularioConserto from "./FormularioConserto";
import styles from './Cadastro.module.css'

function Cadastro() {
  const [nome, setNome] = useState("");
  const [modelo, setModelo] = useState("");
  const [qrCodeGerado, setQrCodeGerado] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleModeloChange = (event) => {
    setModelo(event.target.value);
  };

  const handleFormularioSubmit = (nomeMecanico, pecaUsada) => {

    setFormularioEnviado(true);
  };

  const handleQrCodeGerado = () => {
    setQrCodeGerado(true);
  };

  return (
    <div className={styles.cadastro}>
      <h1>Cadastro</h1>
      {!qrCodeGerado ? (
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={nome} onChange={handleNomeChange} />
          <br />
          <label htmlFor="modelo">Modelo Do Carro:</label>
          <input type="text" id="modelo" value={modelo} onChange={handleModeloChange} />
          <br />
          <button onClick={handleQrCodeGerado}disabled={!nome || !modelo}>Gerar QR Code</button>
        </div>
      ) : (
        <div>
          <p>Nome: {nome}</p>
          <p>Modelo: {modelo}</p>
          <QRCode value={`${nome}, ${modelo}`} />
          <FormularioConserto onFormularioSubmit={handleFormularioSubmit} />
          {formularioEnviado && <p>Formulário enviado com sucesso!</p>}
        </div>
      )}
    </div>
  );
}

export default Cadastro;
