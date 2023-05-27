import React from "react";
import { useNavigate } from 'react-router-dom';

function Menu () {
  const navigate = useNavigate();

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__list__item" onClick={() => navigate('/')}><span>01.</span>About</li>
        <li className="menu__list__item" onClick={() => navigate('/about')}><span>02.</span>Experience</li>
        <li className="menu__list__item" onClick={() => navigate('/projects')}><span>03.</span>Work</li>
        <li className="menu__list__item" onClick={() => navigate('/contact')}><span>04.</span>Contact</li>
      </ul>
    </nav>
  )
}

export default Menu;