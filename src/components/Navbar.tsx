import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Navbar() {
  const [homeClassName, setHomeClassName] = useState('');
  const [homeTextColor, setHomeTextColor] = useState('');
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setHomeClassName('nav-link active');
      setHomeTextColor('white');
    } else {
      setHomeClassName('nav-link');
      setHomeTextColor('grey');
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-center">
        <NavLink className={`nav-link ${homeClassName}`} style={{ color: homeTextColor, border: '1px solid grey', backgroundColor: '#094a8d', borderRadius: '20px', margin: '7px', padding: '7px 15px' }} to="/">
          <FontAwesomeIcon icon={faHome} /> Home
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={`nav-link ${location.pathname === '/text' ? 'active' : ''}`} style={{ border: '1px solid grey', backgroundColor: '#094a8d', borderRadius: '20px', margin: '7px', padding: '7px 15px' }} to="/text">Text Utility</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${location.pathname === '/age' ? 'active' : ''}`} style={{ border: '1px solid grey', backgroundColor: '#094a8d', borderRadius: '20px', margin: '7px', padding: '7px 15px' }} to="/age">Age Utility</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${location.pathname === '/diffcheck' ? 'active' : ''}`} style={{ border: '1px solid grey', backgroundColor: '#094a8d', borderRadius: '20px', margin: '7px', padding: '7px 15px' }} to="/diffcheck">Diff Checker</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} style={{ border: '1px solid grey', backgroundColor: '#094a8d', borderRadius: '20px', margin: '7px', padding: '7px 15px' }} to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
