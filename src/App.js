import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage'; 
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Productpage" element={<Productpage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
