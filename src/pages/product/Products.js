import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import Product from '../../../backend/Pages/Model/Product';
import Product from '../Slice/Productslice';
import Productdisplay from './Productdisplay';
import './Product.css'

function Products() {
   const {
    products, 
    isLoading,
  }= useSelector((store) => store.Products);

  return (
    <>
      {products.data &&(
        
        // <Productdisplay/>
        <div className='allproducts'>
        {products.data.map((product)=>{
          return <Productdisplay product={product}/>
        })}
        </div>
      )}
    </>
  )
}

export default Products
