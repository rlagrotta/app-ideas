import React, { useState, useEffect } from 'react';

export default function Bin2dec() {

    const [inputValue, setInputValue] = React.useState("");
    const [result, setResult] = React.useState("")
    const [error, setError] = React.useState("")

    function handleKeyPress(event) {
        const { key } = event;
    
        if (key !== "0" && key !== "1") {
          event.preventDefault();
        }
      }


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      }


    const handleOperation = (event) => {
        event.preventDefault();
        const parsedResult = parseInt(inputValue, 2)
        if (isNaN(parsedResult)){
            setError("Escribe un número para que el sistema lo convierta en decimal")
            setResult("")
        } else {
            setResult(parsedResult)
            setError("")
        }
    }

      
    return <>
    
    <div className="container mt-4" style={{width:"450px"}}>
        <form onSubmit={handleOperation}>
        <p className="d-flex">Ingrese un número binario (los números binarios son 0 y 1):</p>
      <div className="input-group mb-3">
  <div className="input-group-prepend">
  </div>
  <input type="text" value={inputValue} pattern="^[01]*$" maxLength={8} className="form-control"  aria-label="" aria-describedby="basic-addon1"  onChange={handleInputChange} onKeyPress={handleKeyPress}/>
  <button className="btn btn-outline-secondary" type="submit">Convertir a decimal</button>
</div>
<div class="text-center">
<p className="display-4">{result}</p>
<p className="text-danger">{error}</p>
</div>
</form>
</div>
</> 
}
