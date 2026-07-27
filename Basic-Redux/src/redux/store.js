import {configureStore}from "@reduxjs/toolkit"
import counterSlice from "./featuress/counterSlice"
export const store = configureStore({
    reducer:{
        counter:counterSlice
    }
})