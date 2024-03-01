import './App.css';
import About from './components/About';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState({});

  const showAlert = (message: string, type: string) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert message='This is an alert!' />
      <About mode={mode}></About>
      <TextForm heading='Enter the text to analyze below:' mode={mode}></TextForm>
    </>
  );
}

export default App;