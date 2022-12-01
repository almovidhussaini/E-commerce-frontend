import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css'
import {removecart,increase,decrease} from '../Slice/Productslice'
import {useNavigate} from 'react-router-dom'
function Cart() {
    const {
    cart
  }= useSelector((store) => store.Products);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function proccess(){
    navigate('/proccess')
    console.log('proccess')
  }
  
  return (
    <div className='cart'>
        <div className='cart-header'>
            <h3>Name</h3>
            <h3>Total Price</h3>
            <h3>Quantity</h3>
            <h3>ID</h3>
            <h3>remove</h3>
        </div>
        {cart&& cart.map((product,index)=>{
            console.log(product,'product')

            return(
                <div className='singleitem'>
                    <p>{index}</p>
                    <p>{product.name}</p>
                    <p>{product.price * product.quantity}</p>
                    <p className='quantity'> {<button onClick={()=> dispatch(decrease(product.id))} >-</button> } {product.quantity}   {<button onClick={()=> dispatch(increase(product.id))} >+</button> }</p>
                    <p>{product.id}</p>
                    <button onClick={()=> dispatch(removecart(product.id))}> <DeleteIcon/> </button>

                    {/* <DeleteIcon onclick={dispatch(product.id)} /> */}
                </div>
            )
        })}

        <div  className='proccess'>
            <button onClick={()=>proccess()}>Proccess to payment</button>
        </div>
    </div>
  )
}

export default Cart
