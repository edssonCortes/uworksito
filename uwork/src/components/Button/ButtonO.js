import React, {useState} from 'react'
import './ButtonO.css'

function ButtonO(props) {
    let btnText = props.btnText;
    const [color]= useState(props.color) ;
    const [bg]= useState(props.bg) ;

    return (
        <div >
            <button style={{color:color, background:bg}} className="o-btn">{btnText}</button>
        </div>
    )
}

export default ButtonO
