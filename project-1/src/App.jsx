import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import ResultGrid from './components/ResultGrid';

const App = () => {

  
  return (
    <div className='bg-black  w-full h-screen gap-1 flex flex-col gap-3 p-2'>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  )
}

export default App
