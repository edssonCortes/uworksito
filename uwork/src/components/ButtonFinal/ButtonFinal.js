import React from 'react'
import './ButtonFinal.css'

function ButtonFinal(props) {
    let textico = props.textico;
    return (
    <button className="o-btnF">{textico}</button>

    )
}

export default ButtonFinal
