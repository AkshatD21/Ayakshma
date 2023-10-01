import React, {useState} from 'react';
import "./NavbarStyles.css";
import { MenuItems } from './MenuItems';
import {Link} from 'react-router-dom';
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [state, setState] = useState('false');

    const handleClick = () => {
        setState(prevState => !prevState);
    }

  return (
      <nav className="NavbarItems">
          <img className="lg" alt="logo" src={Logo}/>
          {/* <h1>Trippy</h1> */}

          <div className="menu-icons" onClick={handleClick}>
            <i className={`${state ? 'fas fa-times' : 'fas fa-bars'}`}></i>
          </div>
          <ul className={`${state ? 'nav-menu active' : 'nav-menu'}`}>
            {MenuItems.map((item , index) =>{
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                    </li>   
                )
            })}
              
              <button>Sign Up</button>
          </ul>
      </nav>
  )
}

export default Navbar