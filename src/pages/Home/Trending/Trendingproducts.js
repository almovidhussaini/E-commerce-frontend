import React from 'react'
import img1 from '../../../assets/images/arm-chair-01.jpg'
import img2 from '../../../assets/images/arm-chair-02.jpg'
import img3 from '../../../assets/images/arm-chair-03.jpg'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { addcart } from '../../Slice/Productslice';

const Trendingproducts=()=> {
    const products = {
        product1:{img: img1, name:'Sakari Armchair',category:'Chair',price:99},
        product2:{img: img2, name:'Sakari Armchair',category:'Chair',price:87},
        product3:{img: img3, name:'Sakari Armchair',category:'Chair',price:77},
         product4:{img: img1, name:'local Armchair',category:'Chair',price:50},
    }
  return (
    <>
 
      {Object.keys(products).map((key,index)=>{
        return(
         
            
            <div className='product'>
            <img src={`${products[key].img}`}  width={210} height={210} alt='image'></img>
            <h2>{products[key].name}</h2>
            <p>{products[key].category}</p>
            <div style={{display:'flex', justifyContent:'center'}}>
                <h1>{products[key].price}</h1>
                   <ControlPointIcon width={150}/>    
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Trendingproducts
