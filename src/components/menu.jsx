import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { Divide as Hamburger } from 'hamburger-react'
import { useNavigate } from 'react-router-dom';

function Menu () {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <MediaQuery maxWidth={1024}>
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
        {isOpen && (
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list__item" onClick={() => navigate('/')}><span>01.</span>About</li>
              <li className="menu__list__item" onClick={() => navigate('/about')}><span>02.</span>Experience</li>
              <li className="menu__list__item" onClick={() => navigate('/projects')}><span>03.</span>Work</li>
              <li className="menu__list__item" onClick={() => navigate('/contact')}><span>04.</span>Contact</li>
            </ul>
          </nav>
        )}
      </MediaQuery>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list__item" onClick={() => navigate('/')}><span>01.</span>About</li>
          <li className="menu__list__item" onClick={() => navigate('/about')}><span>02.</span>Experience</li>
          <li className="menu__list__item" onClick={() => navigate('/projects')}><span>03.</span>Work</li>
          <li className="menu__list__item" onClick={() => navigate('/contact')}><span>04.</span>Contact</li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Menu;