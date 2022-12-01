import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './../src/pages/Slice/Productslice'

export const Store = configureStore({
    reducer:{
        Products: ProductSlice,

    }
})