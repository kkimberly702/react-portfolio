import Home from '../Components/Home';
import { Link } from 'react-router-dom'
import WeatherWidget from './WeatherWidget';

function About() {
  return (
    <div>About me!
        
        <Link to="/" element={<Home />}>Home</Link>
      <WeatherWidget />
    </div>
  )
}


export default About;