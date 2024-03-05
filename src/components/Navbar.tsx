import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { GetDynamicStyle } from "../controller/getDynamicStyle";

interface NavProps {
  title: string;
  mode: string;
  toggleMode(mode: string): void;
}

export function MyNavbar(navProps: NavProps) {

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
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
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
          </div>
        </div>
      </div>
    </nav>
  )
}