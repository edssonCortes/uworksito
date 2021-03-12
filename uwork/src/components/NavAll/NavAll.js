import React from 'react'
import Title from '../Title/Title';
import './NavAll.css'

function navAll(props) {
    let titulo1= props.titulo1;
    let titulo2= props.titulo2;

    let textbtn1= props.textbtn1;
    let textbtn2= props.textbtn2;
    return (
        <div>
            <div className="o-nav">
            <div className="o-img-container">
                <Title title1={titulo1} title2={titulo2}></Title>
            </div>
            <div className="o-btn-container">
                <button className="o-btnNav">{textbtn1}</button>
                <button className="o-btnNav">{textbtn2}</button>
            </div>
        </div>
        </div>
    )
}

export default navAll
