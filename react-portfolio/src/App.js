import './App.css';
import { Route, Routes, Link } from "react-router-dom"
/*Components*/
import Sidebar from './Components/Sidebar';
import MainFeed from './Components/MainFeed';
import Widgets from './Components/Widgets';
import About from './Components/About';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      
<main>
  <meta name="color-scheme" content="dark light"></meta>

<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/About" element={<About />}/>

</Routes>
</main>



    </div>
  );
}

export default App;
