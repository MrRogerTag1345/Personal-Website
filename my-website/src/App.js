import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Website from './pages/Main';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Website />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
