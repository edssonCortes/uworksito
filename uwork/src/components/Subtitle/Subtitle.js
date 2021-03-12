import React from 'react'
import './Subtitle.css'

function Subtitle(props) {
    let texto= props.texto;
    return (
        <h3 className="o-subt">{texto} </h3>
    )
}

export default Subtitle
