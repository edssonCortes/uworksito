import React from 'react'
import './Title.css'

function Title(props) {
    let title1=props.title1;
    let title2=props.title2;
    return (
        <div className="o-title">
            <h1 className="o-U">{title1}</h1>
            <h1 className="o-Work">{title2}</h1>
        </div>
    )
}

export default Title
