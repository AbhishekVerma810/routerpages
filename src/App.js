import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Aboutuspage from './pages/Aboutuspage';
import Contactpage from './pages/contactpage';
import Loginpage from './pages/Loginpage';

function App() {
  return (
    <div>
      <Router>
        {/* Navigation */}
         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Aboutuspage">About</Link>
            </li>
            <li>
              <Link to="/contactpage">Contact</Link>
            </li>
            <li>
              <Link to="/Loginpage">Loginpage</Link>
            </li>
          </ul>
        </nav> 
        {/* Route configuration */}
  
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/aboutuspage" element={<Aboutuspage/>} />
          <Route path="/contactpage" element={<Contactpage/>} />
          <Route path="/Loginpage" element={<Loginpage/>} />
       </Routes>
        </Router>
     </div>
  );
}


export default App;
