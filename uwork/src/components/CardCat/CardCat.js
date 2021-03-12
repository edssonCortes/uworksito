import React from 'react'
import './CardCat.css'


function CardCat(props) {
    let text = props.text;
    return (
        
           
                
                <button className="o-card2"> 
                    <h2 className="o-titulo-card">{text}</h2>
                    
                </button>    
                    

            
        
       
    )
}

export default CardCat
