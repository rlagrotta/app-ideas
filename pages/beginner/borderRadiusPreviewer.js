import React, { useState, useEffect } from 'react';

export default function borderRadiusPreviewer() {

    const [right, setRight] = React.useState("0");
    const [down, setDown] = React.useState("0")
    const [left, setLeft] = React.useState("0")
    const [up, setUp] = React.useState("0")

    const [code, setCode] = useState("")

    let completeCode = `.nombreDeLaClaseDelRectangulo {
        border-radius:${right}px ${left}px ${down}px ${up}px}}`

    const handleOperation = (event)=> {
        event.preventDefault()
        console.log("derecha"+right+"abajo"+down+"izquierda"+left+"arriba"+up)
    }     
    return <>
    
    <div className="container mt-4" style={{width:"450px"}}>
        <form onSubmit={handleOperation}>
        <p className="d-flex">Crea un cuadrado y su código en html:</p>
      <div className="input-group mb-3">
  <div className="input-group-prepend">
  </div>
  <label for="right">Right</label>
  <input placeholder="0" type="text" id="right" name="right" value={right} pattern="[0-9]+" maxLength={3} className="form-control"  aria-label="" aria-describedby="basic-addon1"  onChange={e=> setRight(e.target.value)} />
  <label for="left">Left</label>
  <input placeholder="0"name="left" type="text" value={left} pattern="[0-9]+" maxLength={3} className="form-control"  aria-label="" aria-describedby="basic-addon1"  onChange={e=> setLeft(e.target.value)} />
  <label for="down">Down</label>
  <input placeholder="0"for="down" type="text" value={down} pattern="[0-9]+" maxLength={3} className="form-control"  aria-label="" aria-describedby="basic-addon1"  onChange={e=> setDown(e.target.value)} />
  <label for="up">Up</label>
  <input placeholder="0"name="up" type="text" value={up} pattern="[0-9]+" maxLength={3} className="form-control"  aria-label="" aria-describedby="basic-addon1"  onChange={e=> setUp(e.target.value)} />
  <button className="btn btn-outline-secondary" onClick={()=> setCode(completeCode)} type="submit">Crear el código</button>
</div>
<div className="text-center">
 <div style={{ borderTopRightRadius: right+"px", borderBottomRightRadius: down+"px",borderBottomLeftRadius: left+"px", borderTopLeftRadius: up+"px", height: "200px", width: "200px", backgroundColor : "lightblue" }}></div>
 <div>{code}</div>
</div>
</form>
</div>
</> 
}
