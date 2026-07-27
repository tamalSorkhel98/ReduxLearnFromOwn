import React, { useEffect } from 'react'
import {fetchPhotos,fetchVideos}from '../api/mediaApi'
import {setError,setLoading,setResult}from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
const ResultGrid = () => {
    const {quey,activeTab,result,loading,error}=useSelector((store)=>store.search);
   const dispatch=useDispatch()
  useEffect(() => {
      if (!quey) {
            return <h1>Type something</h1>
            
        }
      const getData=async()=>{
      
        try {
            dispatch(setLoading())
            let data=[];
        if (activeTab=='photos') {
           let res= await fetchPhotos(quey)
            data=res.results.map((e,idx)=>({
               id:e.id,
               title:e.alt_description,
               type:"photos",
               src:e.urls.full
                
            })); 
                     
        }
        else if(activeTab=='videos'){
           let res= await fetchVideos(quey);
            data=res.map((e,idx)=>({
                id:e.id,
               title:"video",
               type:"videos",
               src:e.video_files[1].link
            }));
        }
        dispatch(setResult(data))
        } catch (error) {
            dispatch(setError(error.message))
        }
        
    }
    getData()
  }, [quey,activeTab]);
  if(error)return <h1 className='text-white'>eror</h1>;
  if(loading) return <h1 className='text-white'>Loading</h1>
  return (
    <div>
       {result.map((e,id)=>{
        return <span key={id} className='text-white border-2 m-3'>{e.title}</span>
       })}
    </div>
  )
}

export default ResultGrid
