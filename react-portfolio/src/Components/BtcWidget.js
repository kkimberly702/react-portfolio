import React from 'react';
import { useEffect, useState } from 'react';

function BtcWidget() {
 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      'X-RapidAPI-Key': `${process.env.REACT_APP_RapidAPI_Key}` 
    }
  };
  
const [article, setArticle] = useState([]);

useEffect(() => {
  fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
    .then(response => response.json())
    .then(response => setArticle(response[1]))
    .catch(err => console.error(err));
  }, [])
    
  console.log(article);
  // console.log(Object.keys(article));
  

 

  return (
    <div> 
     
      
      
<a target="_blank" href={article.url}><h4>{article.title}</h4></a>

      
          
  
 
      
    </div>
  )
  
}


export default BtcWidget;






{/* ${Object.keys(article).map(key => (
        <li key={key}>{article[key]}</li>
      
      ))} */}

  {/* {Object.keys(article).map(key => (
        <li key={key}>{article[0]}</li>
        
      
      ))} */}