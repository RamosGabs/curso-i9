import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

function App (props){
  

  const modificarNome = event  => {
    console.log(event.target.value)
  }



  const criarComboBox = () => {
    const opcoes = ["Biel", "Ramos"]
    const criarComboOptions = opcoes.map( option => <option>{option}</option>)

    return(
      <select>
        {criarComboOptions}
      </select>
    )
  }

  const meuComboBox = () => criarComboBox()

  return(
      <>
        <input type="text" value={props.nome} onChange={modificarNome} placeholder={"Digite seu nome"}/> 
        <h1>Seu Nome é: {props.nome}</h1>
        <meuComboBox/>

      </>
      
    )
}


export default App;
