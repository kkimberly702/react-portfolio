import './App.css';
import { Route, Routes, Link } from "react-router-dom"

/*Components*/
import Home from './Components/Home';





function App() {
  return (
    <div className="App">
      
<main>
  <meta name="color-scheme" content="dark light"></meta>

<Routes>
  <Route path="/" element={<Home />}/>

</Routes>
</main>



    </div>
  );
}

export default App;
