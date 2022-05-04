import React from 'react';
import Sidebar from './Sidebar';
import MainFeed from './MainFeed';
import Widgets from './Widgets';
import '../home.css';
import NavBar from './NavBar';


function Home() {
  return (
  
    <div className='home-div'>
     <div id='navbar'>
<NavBar />
</div> 

    <Sidebar />
    <MainFeed />
    <Widgets />


     


    </div>


  )
}

export default Home