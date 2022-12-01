import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import customFetch from '../utils/Axios'


const initialState = {
    products:[],
    isLoading:false,
    cart:[],
}

export const getallproducts = createAsyncThunk('/products/get',async()=>{
    try{
        const resp = await customFetch.get('/product/Allproducts')
        // console.log(resp)
        return resp.data
    }catch(error){
        return error;
    }
})
const ProductSlice= createSlice({
    name:'products',
    initialState,

    reducers:{
        addcart:(state,{payload})=>{
            if(state.cart.length===0){
                 state.cart.push(payload)
            }
            else
            { 
                var itemindex = state.cart.findIndex(
                    (item)=> item.id === payload.id
                );
                if(itemindex>=0){
                    state.cart[itemindex].quantity+=1;
                }else{
                    state.cart.push(payload)
                }
        }
        },
        removecart:(state,{payload})=>{
            const filtered = state.cart.filter(product=>{
                return product.id!= payload
            })
            state.cart=filtered
        },
        increase:(state,{payload})=>{
            var itemindex = state.cart.findIndex(
                (item)=> item.id === payload
            )
            state.cart[itemindex].quantity+=1
            // console.log(itemindex ,'increase')
        },
        decrease:(state,{payload})=>{
            var itemindex = state.cart.findIndex(
                (item)=> item.id === payload
            )
            if(state.cart[itemindex].quantity!=0){
                state.cart[itemindex].quantity-=1
            }
            else{
                const filtered = state.cart.filter(product=>{
                return product.id!= payload
            })
            state.cart=filtered

            }
            // console.log('decrese')
            
        }

    },

    extraReducers:{
        [getallproducts.pending]:(state)=>{
            state.isLoading=true;
        },
        [getallproducts.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.products = payload;
            console.log('successed in geting all products')
        },
        [getallproducts.rejected]:(state,{payload})=>{
            state.isLoading=false;
            console.log('getting products rejected')
        }

    }
});

export const { addcart,removecart,increase,decrease} = ProductSlice.actions;
export default ProductSlice.reducer;