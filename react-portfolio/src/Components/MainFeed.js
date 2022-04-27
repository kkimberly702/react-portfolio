import React from 'react';
import '../mainfeed.css';

/*ICONS */
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LinkIcon from '@mui/icons-material/Link';

function MainFeed() {
  return (
    <div className="feed" >
      <h2>Home</h2>
      
      {/* Header */}
      <div className='feed_header'>
      <h3>What's happening?</h3>
     
      

      </div>
      
      <div className='feed_header'>
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


      <div className='feed_header'>
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


      
    
      

      
    


      {/* TweetBox */}

    </div>
  )
}

export default MainFeed;