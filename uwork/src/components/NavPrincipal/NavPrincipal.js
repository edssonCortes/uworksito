import React from 'react'
import ButtonO from '../Button/ButtonO.js'
import Title from '../Title/Title.js'
import './NavPrincipal.css'

function NavPrincipal() {
    return (
        <div className="o-nav">
            <div className="o-img-container">
                <Title></Title>
            </div>
            <div className="o-btn-container">
                <ButtonO className="o-btn" btnText="LOG IN"></ButtonO>
                <ButtonO className="o-btn" btnText="SING IN"></ButtonO>
            </div>
        </div>
    )
}

export default NavPrincipal
