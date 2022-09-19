import React from "react";
import { useNavigate } from 'react-router-dom';

function Menu () {
  const navigate = useNavigate();

  return (
    <details>
      <summary></summary>
      <nav className="menu">
        <ul className="menu__list">
          <li
          onClick={() => navigate('/')}
          className="menu__list__item">Home</li>
          <li 
          onClick={() => navigate('/project')}
          className="menu__list__item">Work</li>
          <li className="menu__list__item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </details>
  )
}

export default Menu;