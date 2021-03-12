import React from 'react'
import './ProfTitle.css'

function ProfTitle(props) {
    let titulo = props.titulo;
    return (
        <h1 className="o-title-profile">{titulo}</h1>
    )
}

export default ProfTitle
