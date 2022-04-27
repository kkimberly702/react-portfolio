import React from 'react';
import SidebarOptions from './SidebarOption';
import '../Sidebar.css';
import '../sidebarOption.css';
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
    <SidebarOptions Icon={TagIcon} text="About"/>

    {/*Socials*/}
    <SidebarOptions Icon={PersonOutlineIcon} text="Socials" />

    {/*Resume*/}
    <SidebarOptions Icon={FileDownloadIcon} text="Resume" />

    {/*Projects*/}
    <SidebarOptions Icon={InterestsIcon} text="Projects" />

    {/*Coffee*/}
    <SidebarOptions Icon={CoffeeIcon} text="Buy me an Iced Coffee" />



    </div>
    
  )
}

export default Sidebar;