import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react'
const SearchSlice = createSlice({
    name:"search",
    initialState:{
        quey:'',
        activeTab:'photos',
        result:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
            state.quey=action.payload
        },
        setTab(state,action){
            state.activeTab=action.payload
        },
        setResult(state,action){
            state.result=action.payload
            state.loading=false
        },
        setLoading(state,action){
            state.loading=true
            state.error=null
        },
        setError(state,action){
            state.error = action.payload
            state.loading=false
        },
        clearResult(state,action){
            state.result=[]
        }
    }
    
})
export const {setError,setQuery,setLoading,setResult,setTab,clearResult} = SearchSlice.actions
export default SearchSlice.reducer