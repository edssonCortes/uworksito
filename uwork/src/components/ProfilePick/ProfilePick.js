import React from 'react'
import ButtonProf from '../ButtonProf/ButtonProf'
import NavSing from '../NavSing/NavSing'
import ProfTitle from '../ProfTitle/ProfTitle'
import Subtitle from '../Subtitle/Subtitle'
import './ProfilePick.css'

function ProfilePick() {
    return (
        <div className="o-all-container">
        <NavSing titulo1="U" titulo2="Work"></NavSing>

        <div className="o-center-container">
            <ProfTitle titulo="Pick a profile"></ProfTitle>
            
            <Subtitle texto="Are you client or service provider?"></Subtitle>
            <div className="o-btn-container-picker">
            <ButtonProf textBoton="Client" colors="#00000"></ButtonProf>
            <ButtonProf textBoton="Service Provider"></ButtonProf>
            </div>
        </div>

    </div>
    )
}

export default ProfilePick
