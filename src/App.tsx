import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import { AboutUs } from './components/AboutUs';
import Age from './components/Age';
import { Alert } from './components/Alert';
import { ContactUs } from './components/ContactUs';
import DiffChecker from './components/DiffChecker';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import { TermsService } from './components/TermsService';
import TextForm from './components/TextForm';

function App() {
  const [mode] = useState('white');
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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<TermsService />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
