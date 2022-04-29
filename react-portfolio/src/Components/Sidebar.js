import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'

import SidebarOptions from './SidebarOption';
import About from '../Components/About';



import '../sidebarOption.css';

// ICONS
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InterestsIcon from '@mui/icons-material/Interests';
import CoffeeIcon from '@mui/icons-material/Coffee';

function Sidebar({ text }) {
  return (
    <div>
    {/*Icon*/}

    {/*Home*/}
    <SidebarOptions active Icon={HomeIcon} text="Home" />
    

    {/*About*/}
    <Link to="/About" element={<About />}><SidebarOptions Icon={TagIcon} text="About" />
    </Link>
   

    {/*Socials*/}
    <SidebarOptions Icon={PersonOutlineIcon} text="Socials" />

    {/*Resume*/}
    <SidebarOptions Icon={FileDownloadIcon} text="Resume" />

    {/*Projects*/}
    <SidebarOptions Icon={InterestsIcon} text="Projects" />

    {/*Coffee*/}
    <a href="https://www.buymeacoffee.com/dev.kim" target="_blank"><SidebarOptions Icon={CoffeeIcon} text="Buy me an Iced Coffee!" /></a>



    </div>
    
  )
}

export default Sidebar;