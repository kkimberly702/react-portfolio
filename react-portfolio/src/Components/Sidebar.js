import React from 'react';
import { Link } from 'react-router-dom'

import SidebarOptions from './SidebarOption';
import About from '../Components/About';



import '../sidebarOption.css';

// ICONS
import TagIcon from '@mui/icons-material/Tag';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InterestsIcon from '@mui/icons-material/Interests';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Sidebar({ text }) {
  return (
    <div className='sidebars'>
  

    {/*Home*/}
    <SidebarOptions active Icon={FavoriteBorderIcon} text="dev_kimberly" />
    

    {/*About*/}
    {/* <Link to="/About" element={<About />}><SidebarOptions Icon={TagIcon} text="About" />
    </Link> */}
   

    {/*Socials*/}
    <a href="https://github.com/kkimberly702" target="_blank"><SidebarOptions Icon={GitHubIcon} text="GitHub" /></a>

    <a href="https://www.linkedin.com/in/kimberlyaguilar00/" target="_blank"><SidebarOptions Icon={LinkedInIcon} text="LinkedIn" /></a>

    {/*Resume*/}
    <SidebarOptions Icon={FileDownloadIcon} text="Resume" />


    {/*Coffee*/}
    <a href="https://www.buymeacoffee.com/dev.kim" target="_blank"><SidebarOptions Icon={CoffeeIcon} text="Buy me an Iced Coffee!" /></a>



    </div>
    
  )
}

export default Sidebar;