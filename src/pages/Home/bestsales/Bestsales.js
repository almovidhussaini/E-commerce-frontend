import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './Bestsales.css'

import img1 from '../../../assets/images/double-sofa-01.png'
import img2 from '../../../assets/images/double-sofa-02.png'
import img3 from '../../../assets/images/double-sofa-03.png'
import img4 from '../../../assets/images/single-sofa-01.jpg'
import img5 from '../../../assets/images/single-sofa-02.jpg'
import img6 from '../../../assets/images/single-sofa-03.jpg'
import img7 from '../../../assets/images/single-sofa-04.png'
const Bestsales=()=> {
  
    const Bestproducts = {
        product1:{img: img1, name:'Stone and Beam Westview',category:'Sofa',price:199},
        product2:{img: img2, name:'Rivet Bigelow Modern',category:'Sofa',price:87},
        product3:{img: img3, name:'Amazon brand sofa',category:'Sofa',price:77},
        product4:{img: img4, name:'Rivet Bigelow Modern',category:'Sofa',price:50},
        product5:{img: img5, name:'Fluffy sheap Sofa',category:'Sofa',price:50},
        product6:{img: img6, name:'Rivet Bigelow Modern',category:'Sofa',price:50},
        product7:{img: img7, name:'Rivet Bigelow Modern',category:'Sofa',price:50},
         product8:{img: img3, name:'Rivet Bigelow Modern',category:'Sofa',price:50},
    }
  return (
    <>
        <h1 className='h1'>Best Sales</h1>
        <div className='bestproducts'>
             {Object.keys(Bestproducts).map((key, index)=>{
            return(
                <div className='salesproduct'>
                    <img src={`${Bestproducts[key].img}`}  width={210} height={210} alt='image'/> 
                    <h4>{Bestproducts[key].name} </h4>
                    <p>{Bestproducts[key].category}</p>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <h1>{Bestproducts[key].price}</h1>
                        <ControlPointIcon/>
                    </div>
                </div>
            )
        })}

        </div>

       
    </>
  )
}

export default Bestsales
