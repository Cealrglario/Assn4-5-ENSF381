import logo from './logo.svg';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage'; 
import LoginPage from './component/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Productpage" element={<Productpage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
