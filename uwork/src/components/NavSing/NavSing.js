import React from 'react'
import Title from '../Title/Title'
import ButtonO from '../Button/ButtonO'
import './NavSing.css'


function NavSing(props) {
    let titulo1 = props.titulo1;
    let titulo2=props.titulo2;

    return (
        <div className="o-nav">
            <div className="o-img-container">
                <Title title1={titulo1} title2={titulo2}></Title>
            </div>
            <div className="o-btn-container">
                <button className="o-btnNav">About us</button>
                <button className="o-btnNav">Contact</button>
                <ButtonO color="#6690FF" bg="#28293D" btnText="LOGIN"></ButtonO>
                <ButtonO color='white' bg='#6690FF' btnText="SINGIN"></ButtonO>
            </div>
        </div>
    )
}

export default NavSing
