import React from 'react'
import ButtonO from '../Button/ButtonO.js'
import Title from '../Title/Title.js'
import './NavPrincipal.css'

function NavPrincipal() {
    return (
        <div className="o-nav">
            <div className="o-img-container">
                <Title title1="U" title2="Work"></Title>
            </div>
            <div className="o-btn-container">
                <ButtonO btnText="LOG IN"></ButtonO>
                <ButtonO color='#3366FF' bg='white' btnText="SING IN"></ButtonO>
            </div>
        </div>
    )
}

export default NavPrincipal
