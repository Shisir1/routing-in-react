import { Link, NavLink} from "react-router-dom";

function getActiveClassName({isActive}) {
  return isActive ? 'active-link' : '';
}

function Header(){
  return (
    <div>
      <NavLink to="/" 
      className={getActiveClassName}>Home</NavLink>
      
      <NavLink to="/about" 
      className={getActiveClassName}>About</NavLink>
      
      <NavLink to="/contact" 
      className={getActiveClassName}>Contact</NavLink>
      
      <NavLink to="/privacy-policy" 
      className={getActiveClassName}>Privacy Policy</NavLink>
    </div>
  )
}

export default Header;