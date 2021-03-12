import React from 'react'
import ButtonProf from '../ButtonProf/ButtonProf'
import NavSing from '../NavSing/NavSing'
import ProfTitle from '../ProfTitle/ProfTitle'
import Subtitle from '../Subtitle/Subtitle'
import './Singin.css'


function Singin() {
    return (
        <div className="o-all-container">
            <NavSing titulo1="U" titulo2="Work"></NavSing>

            <div className="o-center-container">
                <ProfTitle titulo="SingUp"></ProfTitle>

                <Subtitle texto="Complete the form to create your account"></Subtitle>
                <div className="o-input-container">
                    <label className="o-label">Full Name</label>
                    <input className="o-input" placeholder="Name" type="text"></input>
                    <label className="o-label">Email</label>
                    <input className="o-input" placeholder="Email" type="text"></input>
                    <label className="o-label">Password</label>
                    <input className="o-input" placeholder="Password" type="password"></input>
                    <label className="o-label">Confrim Password</label>
                    <input className="o-input" placeholder="Confirm" type="password"></input>

                </div>
                

                <ButtonProf textBoton="Register">
                   
                </ButtonProf>
            </div>

        </div>
        
    )
}

export default Singin
