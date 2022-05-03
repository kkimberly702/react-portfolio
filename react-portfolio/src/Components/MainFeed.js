import React from 'react';
import '../mainfeed.css';

/*ICONS */
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// IMAGES
import imgkim from '../images/kim.jpeg';
import jobtrackr from '../images/jobtrackr.png';
import btcrsi from '../images/TradeSignals.png';
import kimportfolio from '../images/kim-portfolio.png';

function MainFeed() {
  return (


    <div className="feed" >

<div className='feed_header'>
<a href="https://twitter.com/dev_kimbeverly" target="_blank"><img className="profile-img" src={imgkim }/></a>
      <h2>Kimberly Aguilar</h2>
      <a href="https://twitter.com/dev_kimbeverly" target="_blank">@dev_kimbeverly</a>
      <p>A Latina Full-stack developer with a background in policy and procedures.  
      <br></br>When I am not coding you can find me researching the next crypto moonbag, traveling, trading stocks/cryptocurrency, watching movies or at a local coffee shop buying an iced coffee. 
        <p>Check out some of my projects below!</p>
        </p>
      <br></br>

        <a href="https://earth.google.com/web/@36.40294029,-115.32574965,969.16324215a,364389.25463475d,35y,-134.12416448h,58.09596309t,0r/data=Cg8aDQoHL20vMHlqcRgBIAE?utm_source=referral&utm_campaign=marketingutm_campaign=earthview%3Futm_source%3Dwebtekno" target="_blank"><LocationOnIcon /> Las Vegas, Nevada</a>
     

        <div className='border-box'><h3><b>Projects</b></h3></div>
       
</div>
      



<div className="project-box">
        <b>Kimberly</b> <span className='twitter-handle'>@dev_kimbeverly </span>
        <p>
        <a href="https://kkimberly702.github.io/project-btc-rsi/" target="_blank"><b>Easy Trade Signals using Indicators</b></a>
        <br></br>
        This was a project I created using React and an API. I used the Bitcoin 1 hour Relative Strength Index API. I included a possible entry/exit signal for a trade. 
        </p>
        <a href="https://kkimberly702.github.io/project-btc-rsi/" target="_blank"><img className="projects-img" src={btcrsi}/></a>

        <div className='footer'>
        <CommentsDisabledIcon fontSize='small'/>
        <RepeatIcon fontSize='small'/>
        <span className='heart-icon'><FavoriteIcon fontSize='small'/></span>
        <a href="https://kkimberly702.github.io/project-btc-rsi/" target="_blank"><LinkIcon fontSize='small'/></a>
        </div>
      </div>

      

      
      <div className="project-box">
        <b>Kimberly</b> <span className='twitter-handle'>@dev_kimbeverly </span>
        <p>
        <a href="https://pages.git.generalassemb.ly/theWestCoders/JobTrackr/" target="_blank"><b>JobTrackr</b></a>
        <br></br>
        This was a group project designed to help keep track of jobs posted. It was developed using Mongoose, Express, React and Node.js.
        </p>
        <a href="https://pages.git.generalassemb.ly/theWestCoders/JobTrackr/" target="_blank"><img className="projects-img" src={jobtrackr}/></a>

        <div className='footer'>
        <CommentsDisabledIcon fontSize='small'/>
        <RepeatIcon fontSize='small'/>
        <span className='heart-icon'><FavoriteIcon fontSize='small'/></span>
        <a href="https://pages.git.generalassemb.ly/theWestCoders/JobTrackr/" target="_blank"><LinkIcon fontSize='small'/></a>
        </div>
      </div>




      <div className="project-box">
        <b>Kimberly</b> <span className='twitter-handle'>@dev_kimbeverly </span>
        <p>
        <a href="https://kkimberly702.github.io/portfolio/" target="_blank"><b>Personal Portfolio</b></a>
        <br></br>
        This was my first attempt at making my personal portfolio. I then decided to remake it using React and BootStrap. It was developed using HTML, CSS and some JavaScript.
        </p>
        <a href="https://kkimberly702.github.io/portfolio/" target="_blank"><img className="projects-img" src={kimportfolio}/></a>

        <div className='footer'>
        <CommentsDisabledIcon fontSize='small'/>
        <RepeatIcon fontSize='small'/>
        <span className='heart-icon'><FavoriteIcon fontSize='small'/></span>
        <a href="https://kkimberly702.github.io/portfolio/" target="_blank"><LinkIcon fontSize='small'/></a>
        </div>
      </div>

      


    </div>
  )
}

export default MainFeed;