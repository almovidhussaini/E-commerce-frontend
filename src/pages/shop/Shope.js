import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import {getallproducts} from '../Slice/Productslice';
import Products from '../product/Products';
import './Shope.css'

const Shope=()=> {
  const categories=['Filterbycategory','Sofa','Mobile','Chair','Watch', 'Wireless'];
  const [selects,setSelects] = useState('Chair');
  const [search,setSearch] = useState(" ");

 
  useEffect(()=>{
     dispatch(getallproducts());
  },[])

  const dispatch = useDispatch();
 

  return (
    <div className='shope'>
         <div className='top'>
          <h1>products</h1>

         </div>
         <div className='getproducts'>
          <div className='search'>
            <select value={selects} onChange={e=>setSelects(e.target.value)}>
              {categories.map((category)=>(
                 <option>{category}</option>
              )) }
            </select>
            <form>
              <input type='text' placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)}>
              </input>
            </form >
          </div>
         </div>
         <Products/>

         <div>

         </div>
    </div>
  )
}

export default Shope
