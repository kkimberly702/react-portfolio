import React from 'react'
import Sidebar from './Sidebar'
import MainFeed from './MainFeed'
import Widgets from './Widgets'
import '../home.css';

function Home() {
  return (
    <div className='home-div'>

    <Sidebar />
    <MainFeed />
    <Widgets />



    </div>


  )
}

export default Home