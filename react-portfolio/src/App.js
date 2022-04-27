import './App.css';

/*Components*/
import Sidebar from './Components/Sidebar';
import MainFeed from './Components/MainFeed';
import Widgets from './Components/Widgets';

function App() {
  return (
    <div className="App">
      
      <Sidebar />
      <MainFeed />
      <Widgets />
    </div>
  );
}

export default App;
