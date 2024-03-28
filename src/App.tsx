import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import { Account } from './controller/Account';
import Age from './components/Age';
import { Alert } from './components/Alert';
import Home from './components/Home';
import LogIn from './components/LogIn';
import { Navbar } from './components/Navbar';
import TextForm from './components/TextForm';
import SignUp from './components/SignUp';

function App() {
  const [signedUp, setSignedUp] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loggedOut, setLoggedOut] = useState<boolean>(false);
  const [mode, setMode] = useState<string>('white');
  const [alert, setAlert] = useState<{ type: string; message: string }>({ type: '', message: '' });

  const showAlert = (type: string, message: string) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert({
        message: '',
        type: ''
      });
    }, 3000);
  };

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
  };

  useEffect(() => {
    const isActive = async () => {
      const account = new Account();
      const session = await account.getSession();

      if (session !== undefined && session.isValid()) {
        setLoggedIn(true);
      }
    };

    isActive();
  }, []);

  const handleSignUp = () => {
    console.log('App.handleSignUp: ', signedUp);
    setSignedUp(true);
  };

  const handleLogIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    console.log('App.handleLogOut: ', loggedOut);
    setLoggedOut(true);
    setLoggedIn(false);
  };

  return (
    <>
      <Router>

        {!loggedIn &&
          <>
            <Alert alert={alert} />
            <Routes>
              <Route path="/" element={<LogIn onLogIn={handleLogIn} showAlert={showAlert} />} />
              <Route path="/signup" element={<SignUp onSignUp={handleSignUp} showAlert={showAlert} />} />
            </Routes>
          </>}
        {loggedIn && (
          <>
            <Navbar mode={mode} loggedOut={handleLogOut} toggleMode={toggleMode}></Navbar>
            <Alert alert={alert} />
            <Routes>
              <Route path="/" element={<Home mode={mode}></Home>} />
              <Route path="/text" element={<TextForm showAlert={showAlert} mode={mode}></TextForm>} />
              <Route path="/age" element={<Age mode={mode}></Age>} />
              <Route path="/about" element={<About mode={mode}></About>} />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
