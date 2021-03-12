import React from 'react'
import './ButtonProf.css'

function ButtonProf(props) {
    let textBoton=props.textBoton;
    return (
    <button className="o-btnprof" >{textBoton}</button>
    )
}

export default ButtonProf
