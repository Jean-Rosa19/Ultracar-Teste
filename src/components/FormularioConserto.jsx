import React, { useState } from "react";

function FormularioConserto(props) {
  const [nomeMecanico, setNomeMecanico] = useState("");
  const [pecaUsada, setPecaUsada] = useState("");
  const [pecaNecessaria, setPecaNecessaria] = useState("");
  const [precoPecaNecessaria, setPrecoPecaNecessaria] = useState(0);
  const [servicoIniciado, setServicoIniciado] = useState(false);
  const [dataInicio, setDataInicio] = useState("");

  const listaPecas = [
    { nome: "Bateria", preco: 350 },
    { nome: "Pneu", preco: 200 },
    { nome: "Freio", preco: 550 },
    { nome: "Suspensão", preco: 750 },
    { nome: "Correia Dentada", preco: 400 },
  ];

  const handleNomeMecanicoChange = (event) => {
    setNomeMecanico(event.target.value);
  };

  const handlePecaUsadaChange = (event) => {
    setPecaUsada(event.target.value);
  };

  const handlePecaNecessariaChange = (event) => {
    const peca = event.target.value;
    const preco = listaPecas.find((item) => item.nome === peca).preco;
    setPecaNecessaria(peca);
    setPrecoPecaNecessaria(preco);
  };

  const handleIniciarServicoClick = () => {
    const data = new Date().toLocaleString();
    setDataInicio(data);
    setServicoIniciado(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onFormularioSubmit(nomeMecanico, pecaUsada);
    setNomeMecanico("");
    setPecaUsada("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nomeMecanico">Nome do mecânico:</label>
      <input type="text" id="nomeMecanico" value={nomeMecanico} onChange={handleNomeMecanicoChange} />
      <br />
      <br />
      <label htmlFor="pecaNecessaria">Peça necessária:</label>
      <select id="pecaNecessaria" value={pecaNecessaria} onChange={handlePecaNecessariaChange}>
        <option value="">-- Selecione uma peça --</option>
        {listaPecas.map((item, index) => (
          <option key={index} value={item.nome}>
            {item.nome}
          </option>
        ))}
      </select>
      {pecaNecessaria && (
        <p>
          Peça selecionada: {pecaNecessaria} (valor: R$ {precoPecaNecessaria})
        </p>
      )}
      <br />
      {!servicoIniciado && (
        <button type="button" onClick={handleIniciarServicoClick}>
          Iniciar Serviço
        </button>
      )}
      {servicoIniciado && (
        <p>
          Serviço iniciado pelo {nomeMecanico} em {dataInicio}
          </p>
)}
        <br />
        <button type="submit">Registrar</button>
    </form>
    );
    }

    export default FormularioConserto;