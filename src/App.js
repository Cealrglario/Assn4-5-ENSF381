import logo from './logo.svg';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage'; 
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Group members:
// Carl Elgario (UCID: 30186248)
// Wade Banman (UCID: 30197933)

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
