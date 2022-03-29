import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoPage from './components/VideoPage.jsx';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="films/big-buck" element={<VideoPage src="big-buck"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
