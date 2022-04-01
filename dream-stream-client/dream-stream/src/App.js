import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoPage from './pages/VideoPage.jsx';
import Landing from './pages/Landing/Landing.jsx';
import './global-styles/global.css'
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="films/big-buck" element={<VideoPage src="big-buck"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
