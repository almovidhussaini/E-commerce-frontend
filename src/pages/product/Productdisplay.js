import React from 'react'
import './Product.css'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useSelector, useDispatch } from 'react-redux';
import { addcart } from '../Slice/Productslice';


const Productdisplay=({product})=> {
  const dispatch= useDispatch()
  
  function handleclick(){
    console.log('hello there')
    dispatch(addcart( { category: product.category, price:product.price, name: product.name,id:product._id,quantity:1} ))

  }
  
  return (
    <div className='productimage'>
      <h1>{product.name}</h1>
      <img src={product.image} width={210} height={210} alt='image'/>
      <p>{`$ ${product.price} `}</p>
      <p>{product.description}</p>
      <button  onClick={() => { handleclick()}}>Add to cart</button>
      {/* <ControlPointIcon /> */}
    </div>
  
  )
}

export default Productdisplay
