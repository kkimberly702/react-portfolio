import '../widgets.css';
import WeatherWidget from './WeatherWidget';
import BtcWidget from './BtcWidget';



function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets-background'>
  
        <div className='widgets-box'><h2>What's happening</h2>
        <WeatherWidget />
      
        </div>
        <div className='widgets-box'><h2>Cryptocurrency</h2>
        <BtcWidget />
        </div>
        
        </div>
        </div>
  )
}



export default Widgets;