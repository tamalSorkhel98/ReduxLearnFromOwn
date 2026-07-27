import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }
 
    
  return (
    <div className='flex items-center justify-center w-full  '>
      <form 
      className='flex gap-4 border-green-50'
      onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input required value={text}
        className=' rounded border-white border-2 text-2xl text-white'
        type="text" placeholder='search here'
        onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <button className='text-2xl border-white border-2 text-white rounded px-3 py-2 active:scale-95'
        >Search</button>
      </form>
    </div>
  )
}

export default SearchBar
