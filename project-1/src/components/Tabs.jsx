import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTab } from '../redux/features/searchSlice';

const Tabs = () => {
    const activeTab = ['photos','videos'];
    const dispatch = useDispatch();
    const currentTab = useSelector((state)=>state.search.activeTab);
    
    
  return (
    <div className='flex justify-center items-center gap-3'>
      {
        activeTab.map((tab,id)=>{
          return (
            <button 
            className={`${(currentTab==tab?'bg-green-400':'bg-transparent')} text-2xl border-white border-2 text-white rounded px-3 py-2 active:scale-95`}
            onClick={()=>{dispatch(setTab(tab))}}
            key={id}>{tab}</button>
          )
           
        })
      }
    </div>
  )
}

export default Tabs
