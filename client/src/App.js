import './App.css';
import CreateTeam from './components/CreateTeam';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DisplayAll from './components/DisplayAll';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        < Route path ="/create/players" element ={ < CreateTeam />} />
        <Route path = '/' element = {< DisplayAll />} />
      </Routes>
      </BrowserRouter>
     
      
    
      
    </div>
  );
}

export default App;
