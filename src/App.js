import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import React from 'react';

function App() {
  return (
    
    <div className="App">
      <Navbar />

     

      <Router>

        <Routes>

          <Route path="/"element={<Home/>} />

        </Routes>
        
      </Router> 

    </div>
  );
}

export default App;
