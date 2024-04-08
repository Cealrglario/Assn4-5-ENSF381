import { React, createContext, useState, useEffect } from 'react';
import logo from './logo.svg';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage'; 
import LoginPage from './component/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AuthContext = createContext()

function App() {
  const [authenticated, setAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('authenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  useEffect(() => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);

  const authContextValue = {
    authenticated,
    setAuthenticated,
  };

  return (
    <AuthContext.Provider value = {authContextValue}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/Productpage" element={<Productpage />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
export {AuthContext};
