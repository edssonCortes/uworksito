import React from 'react'
import ButtonFinal from '../ButtonFinal/ButtonFinal'
import NavAll from '../NavAll/NavAll'

import Subtitle from '../Subtitle/Subtitle'
import Title from '../Title/Title'
import './Profile.css'

function Profile() {
    return (
    <div className="o-all">
        <NavAll titulo1="U" titulo2="Profile" textbtn1="Change profile" textbtn2=" Log Out"></NavAll>
        <div className="o-cont-prof">
            <div className="o-left">
                <Title title1="G" title2="raphic designer "></Title>
                <ButtonFinal textico="Hire me!"></ButtonFinal>
            </div>
            <div className="o-right">
                <Title title1="Luis Cortazar"></Title>
                <Subtitle texto=" 'Life is short'"></Subtitle>
                <p className="text">My name is Luis Cortazar, I was born in Montevideo, Uruguay, 1969. At the age of 13 I moved with my family to Sweden where I finished my nine-year compulsory school. One year later I started to travel. For several years I had the opportunity to travel a lot and I enjoyed visiting news countries and learning about their cultures.</p>
                <div className="card-cont">
                    <button className="o-port"> <h5 className ="o-btntext">Last job1</h5></button>
                    <button className="o-port"> <h5 className ="o-btntext">Last job2</h5></button>
                    <button className="o-port"> <h5 className ="o-btntext">Last job3</h5></button>
                    
                    
                
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile
