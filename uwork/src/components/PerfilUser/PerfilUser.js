import React from 'react'
import ButtonFinal from '../ButtonFinal/ButtonFinal'
import CardJob from '../CardJob/CardJob'
import NavAll from '../NavAll/NavAll'
import ProfTitle from '../ProfTitle/ProfTitle'
import Subtitle from '../Subtitle/Subtitle'
/*import { MdAccessibility } from "react-icons/md";*/
import './PerfilUser.css'

function PerfilUser() {
    return (
        <div className="o-allP">
            <NavAll titulo1="Ur" titulo2="Profile" textbtn1="Editar perfil" textbtn2="Log out"></NavAll>
            <div className="o-all-prof">
                <div className="o-izq">
                    <div className="o-hi">
                        <h1 className="o-h1">Hola luis!</h1>
                        <p className="o-p"> Nice to see you again!</p>
                        <img src="illustration.png" alt="gg" className="o-imgHI"></img>
                        
                    </div>

                    <div className="o-longcard">
                        <img src="img.png" alt="gg" className="o-img"></img>
                        <div className="o-incard">
                        <h3 className="o-h3">Profile Rate</h3>
                        <p className="o-p"> Your profile have been completed of the bussiness arrangement</p>
                        </div>
                       
                        <ButtonFinal textico="View"></ButtonFinal>
                    </div>

                    <Subtitle texto="Jobs"></Subtitle>
                    <div className="o-textCont">

                    <h4 className="text1"> All jobs</h4>
                    <h4 className="text2"> Newest</h4>
                    <h4 className="text2"> Top rated</h4>
                    <h4 className="text2"> Most popular</h4>
                    </div>

                    <div className="o-cardjob-cont">
                    <CardJob  img ="figma.png" titulo="Flyer music" descrip="By Luis Cortazar" btntext="View job"></CardJob>
                    <CardJob  img ="photo.png" titulo="Analogic photographi" descrip="By Luis Cortazar" btntext="View job"></CardJob>
                    <CardJob  img ="instapng.png" titulo="Flyer music" descrip="By Luis Cortazar" btntext="View job"></CardJob>
                    <CardJob  img ="pencil.jpg" titulo="Flyer music" descrip="By Luis Cortazar" btntext="View job"></CardJob>
                    <CardJob  img ="ps.png" titulo="Flyer music" descrip="By Luis Cortazar" btntext="View job"></CardJob>
                    </div>
                    
                    
                    


                    
                </div>
                <div className="o-der">
                    <div className="cardCont">
                        <div className="cardsita">
                            <ProfTitle titulo="11"></ProfTitle> 
                            <div className="subcont">
                            <h3 className="o-h3c">Jobs<br></br>completed</h3>
                            
                            </div>    
                        </div>
                        <div className="cardsita"> 
                        <ProfTitle titulo="4"></ProfTitle> 
                            <div className="subcont">
                            <h3 className="o-h3c">Jobs<br></br>in progress</h3>
                            
                            </div>  
                        </div>
                            
                    </div>

                    <Subtitle texto="Last job"></Subtitle>
                    <img src="imgder.png" alt="gg" className="o-imgder"></img>

                    <div className="o-fcard">
                    <h3 className="o-h3f">Extras</h3> 
                    <p className="o-pf"> Be the first on the design categorie. 
                                        Unlock extra visualization
                                        only for $9.99 per month.</p>
                    <ButtonFinal textico="Go pay"></ButtonFinal>
                        
                    </div>

                </div>


            </div>
        </div>
    )
}

export default PerfilUser
