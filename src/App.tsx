import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Correct import statement
import './App.css';
import About from './components/About';
import Age from './components/Age';
import { Alert } from './components/Alert';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState({ type: '', message: '' });

  const showAlert = (type: string, message: string) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert({
        message: '',
        type: ''
      })
    }, 1500);
  }

  const toggleMode = (mode: string) => {
    if (mode === 'white') {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'White mode is enabled.');
    } else if (mode === 'light') {
      setMode('grey');
      document.body.style.backgroundColor = '#f2eded';
      showAlert('success', 'Light mode is enabled.');
    } else if (mode === 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('success', 'Dark mode is enabled.');
    } else if (mode === 'blue') {
      setMode('blue');
      document.body.style.backgroundColor = '#4d4db7';
      showAlert('success', 'Blue mode is enabled.');
    } else if (mode === 'black') {
      setMode('black');
      document.body.style.backgroundColor = 'black';
      showAlert('success', 'Black mode is enabled.');
    } else if (mode === 'red') {
      setMode('red');
      document.body.style.backgroundColor = '#9d2222';
      showAlert('success', 'Red mode is enabled.');
    } else if (mode === 'green') {
      setMode('green');
      document.body.style.backgroundColor = '#167516';
      showAlert('success', 'Green mode is enabled.');
    } else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light mode is enabled.');
    }
  }

  return (
    <Router>
      <>
        <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />

        {/* Use Routes for defining routes */}
        <Routes>
          <Route path="/" element={<Home mode={mode}></Home>} />
          <Route path="/text" element={<TextForm showAlert={showAlert} mode={mode}></TextForm>} />
          <Route path="/age" element={<Age mode={mode}></Age>} />
          <Route path="/about" element={<About mode={mode}></About>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
