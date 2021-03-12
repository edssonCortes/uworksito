import React from 'react'
import ButtonFinal from '../ButtonFinal/ButtonFinal'
import './CardJob.css'


function CardJob(props) {
    let titulo= props.titulo;
    let descrip= props.descrip;
    let img= props.img;
    let btntext= props.btntext;
    return (
            <div className="o-cont">

                <img src={img} alt="gg" className="o-img2"></img>
                <div className="o-incard3">

                
                <div className="o-incard2">
                    <h3 className="o-h3c">{titulo}</h3>
                    <p  className="o-pc">{descrip}</p>
                    
                </div>
                <ButtonFinal textico={btntext}></ButtonFinal>

                </div>
            </div>
    )
}

export default CardJob
