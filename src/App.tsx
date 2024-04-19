import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Age from './components/Age';
import { Alert } from './components/Alert';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import TextForm from './components/TextForm';
import DiffChecker from './components/DiffChecker';

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

  return (
    <Router>
      <>
        <Navbar></Navbar>
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Home mode={mode}></Home>} />
          <Route path="/text" element={<TextForm showAlert={showAlert} mode={mode}></TextForm>} />
          <Route path="/age" element={<Age mode={mode}></Age>} />
          <Route path="/diffcheck" element={<DiffChecker />} />
          <Route path="/about" element={<About mode={mode}></About>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
