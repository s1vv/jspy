import "./style.css"
import { NavLink } from "react-router-dom"
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

function Navbar () {
  const activeLink = 'nav-list__link nav-list__link--active';
  const link = 'nav-list__link';

  return (
    <nav className="nav">
              <div className="container">
                  <div className="nav-row">
                    <NavLink to="/" className="logo">
                      <strong>Freelacer</strong>portfolio
                    </NavLink>
                    <NavLink
                    className={({ isActive }) => isActive ? activeLink : link}
                    to="." end>
                    Главная
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => isActive ? activeLink : link}
                        to="projects">
                        Мои проекты
                    </NavLink>
                    
                   <BtnDarkMode />
                  </div>
              </div>
          </nav>
  )
}
export default Navbar