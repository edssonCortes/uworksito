import React from 'react'
import ButtonProf from '../ButtonProf/ButtonProf'
import NavSing from '../NavSing/NavSing'
import ProfTitle from '../ProfTitle/ProfTitle'
import Subtitle from '../Subtitle/Subtitle'
import './Login.css'

function Login() {
    return (
        <div className="o-all-container">
        <NavSing titulo1="U" titulo2="Work"></NavSing>

        <div className="o-center-container">
            <ProfTitle titulo="LogIn"></ProfTitle>
            

            
            <div className="o-input-container">
                <label className="o-label">Email</label>
                <input className="o-input" placeholder="Email" type="text"></input>
                
                <label className="o-label">Password</label>
                <input className="o-input" placeholder="Password" type="password"></input>
                

            </div>
            <Subtitle texto="Forgot password?"></Subtitle>

            <ButtonProf textBoton="Login" ></ButtonProf>
        </div>

    </div>
    )
}

export default Login
