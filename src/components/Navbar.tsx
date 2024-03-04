import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

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

  const textColor = () => {
    if (navProps.mode === 'light' || navProps.mode === 'white' || navProps.mode === 'grey') {
      return "#042743";
    } else {
      return "white";
    }
  }

  const navBackgroundColor = () => {
    if (navProps.mode === 'light') {
      return "#f2eded";
    } else if (navProps.mode === 'dark') {
      return "#042743";
    } else {
      return navProps.mode;
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${navBackgroundColor()} bg-${navBackgroundColor}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" style={{ color: textColor() }} to="/">
          <FontAwesomeIcon icon={faHome}/> {navProps.title}
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" style={{ color: textColor() }} to="/age">AgeUtility</NavLink>
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