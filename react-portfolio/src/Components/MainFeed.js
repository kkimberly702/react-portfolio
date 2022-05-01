import React from 'react';
import '../mainfeed.css';

/*ICONS */
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import imgkim from '../images/kim.jpeg';

function MainFeed() {
  return (


    <div className="feed" >

<div className='feed_header'>
      <img src={imgkim}/>
      <h2>Kimberly Aguilar</h2>
      @dev_kimbeverly
      <p>A Latina Full-stack developer with a background in policy and procedures.  
      <br></br>When I am not coding you can find me researching the next crypto moonbag, traveling, trading stocks/cryptocurrency, watching movies or at a local coffee shop buying an iced coffee. 
        <p>Check out some of my projects below!</p>
        </p>
      <br></br>

        <LocationOnIcon /> Las Vegas, Nevada
     

        <h3><b>Projects</b></h3>
       
</div>
      

      
      <div className="project-box">
        <b>Kimberly</b> @dev_kimbeverly   2h
        <p>
        This was a group project using React for the frontend and mongoDB.
        </p>

        <div className='footer'>
        <CommentsDisabledIcon fontSize='small'/>
        <RepeatIcon fontSize='small'/>
        <FavoriteBorderIcon fontSize='small'/>
        <LinkIcon fontSize='small'/>
        </div>
      </div>


    </div>
  )
}

export default MainFeed;