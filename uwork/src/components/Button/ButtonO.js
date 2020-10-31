import React from 'react'
import './ButtonO.css'

function ButtonO(props) {
    let btnText = props.btnText;
    /*let btnColor= this.props.btnColor;*/
    return (
        <div >
            <button className="o-btn">{btnText}</button>
        </div>
    )
}

export default ButtonO
