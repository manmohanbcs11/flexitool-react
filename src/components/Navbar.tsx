import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { NavLink, useNavigate } from "react-router-dom";
import { GetDynamicStyle } from "../controller/getDynamicStyle";

interface NavProps {
  mode: string;
  toggleMode(mode: string): void;
  loggedOut(): void;
}

export function Navbar(navProps: NavProps) {
  const COGNITO_USER_POOL_ID: string = process.env.REACT_APP_COGNITO_USER_POOL_ID || '';
  const COGNITO_CLIENT_ID: string = process.env.REACT_APP_COGNITO_CLIENT_ID || '';
  const navigate = useNavigate();

  function changeMode(colourMode: string): void {
    if (colourMode === 'light') {
      navProps.toggleMode('light');
    } else if (colourMode === 'white') {
      navProps.toggleMode('white');
    } else if (colourMode === 'dark') {
      navProps.toggleMode('dark');
    } else if (colourMode === 'blue') {
      navProps.toggleMode('blue');
    } else if (colourMode === 'black') {
      navProps.toggleMode('black');
    } else if (colourMode === 'red') {
      navProps.toggleMode('red');
    } else if (colourMode === 'green') {
      navProps.toggleMode('green');
    }
  }

  const currentStyle = new GetDynamicStyle(navProps.mode);
  const textColor = currentStyle.textColor();
  const navBackgroundColor = currentStyle.navBackgroundColor();

  const logout = async () => {
    const pool = new CognitoUserPool({
      UserPoolId: COGNITO_USER_POOL_ID,
      ClientId: COGNITO_CLIENT_ID
    });
    const user = pool.getCurrentUser();
    if (user) {
      user.signOut();
      navProps.loggedOut();
      console.log('User signed out');
      navigate('/');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${navBackgroundColor} bg-${navBackgroundColor}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" style={{ color: textColor }} to="/">
          <FontAwesomeIcon icon={faHome} /> Home
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" style={{ color: textColor }} to="/text">Text Utility</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" style={{ color: textColor }} to="/age">Age Utility</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" style={{ color: textColor }} to="/about">About Us</NavLink>
            </li>
          </ul>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle mx-1" type="button" style={{ backgroundColor: '#3366dd' }} data-bs-toggle="dropdown" id="modeSwitch" aria-expanded="false">
              Mode
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => changeMode('light')} style={{ width: '80px', backgroundColor: '#f2eded', color: 'Black' }}>Light</button></li>
              <li><button className="dropdown-item" onClick={() => changeMode('dark')} style={{ width: '80px', backgroundColor: '#042743', color: 'white' }}>Dark</button></li>
              <li><button className="dropdown-item" onClick={() => changeMode('white')} style={{ width: '80px', backgroundColor: 'White', color: 'Black' }}>White</button></li>
              <li><button className="dropdown-item" onClick={() => changeMode('black')} style={{ width: '80px', backgroundColor: 'Black', color: 'white' }}>Black</button></li>
              <li><button className="dropdown-item" onClick={() => changeMode('red')} style={{ width: '80px', backgroundColor: '#9d2222', color: 'white' }}>Red</button></li>
              <li><button className="dropdown-item" onClick={() => changeMode('blue')} style={{ width: '80px', backgroundColor: '#4d4db7', color: 'white' }}>Blue</button></li>
              <li><button className="dropdown-item" onClick={() => changeMode('green')} style={{ width: '80px', backgroundColor: '#167516', color: 'white' }}>Green</button></li>
            </ul>
            <button className="btn btn-secondary mx-1" type="button" style={{ backgroundColor: '#3366dd' }} onClick={() => logout()}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}