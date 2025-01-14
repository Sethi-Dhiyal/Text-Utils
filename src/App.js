import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  const changeMode = (selectedMode) => {
    setMode(selectedMode);
    let backgroundColor;
    switch (selectedMode) {
      case 'dark':
        backgroundColor = '#0d144e';
        document.title = 'TextUtils - Dark Mode';
        break;
      case 'blue':
        backgroundColor = '#0033cc';
        document.title = 'TextUtils - Blue Mode';
        break;
      case 'green':
        backgroundColor = '#004d00';
        document.title = 'TextUtils - Green Mode';
        break;
      default:
        backgroundColor = 'white';
        document.title = 'TextUtils - Light Mode';
    }
    document.body.style.backgroundColor = backgroundColor;
    showAlert(`${selectedMode} mode enabled`, 'success');
  };

  return (
    <Router>
      <Navbar title="TextUtils" homeTown={"Home"}  aboutText={"About"}mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
