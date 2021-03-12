import React from 'react'
import CardCat from '../CardCat/CardCat'
import NavAll from '../NavAll/NavAll'


import './Categories.css'

function Categories() {
    return (
        
            <div className="o-all-container">
                <NavAll titulo1="U" titulo2="Categories" textbtn1="Change profile" textbtn2=" Log Out"></NavAll>


                <h2 className="o-textC">SELECT A CATEGORY</h2>


                 <div className="o-cardCat-cont">
                    <CardCat text="Laws"></CardCat>
                    <CardCat text="Graphical design"></CardCat>
                    <CardCat text="Engeneering"></CardCat>
                    <CardCat text="Administration"></CardCat>
                    <CardCat text="Mateishon"></CardCat>
                    <CardCat text="Phisics"></CardCat>
                    <CardCat text="Medicine"></CardCat>
                    <CardCat text="Odontology"></CardCat>
                </div>

            </div>

        
    )
}

export default Categories
