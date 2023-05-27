import React from "react";
import Menu from "./menu";

function Header ({ animation }) {
  return (
    <header className="header">
      <Menu />
      <section className="header__text">
        <div className="header__text__title">
          <h1 className="header__text__title__highlight">Hi, my name is </h1>
          <h2 className="header__text__name">Elouan</h2>
          <h2 className="header__text__jobs">web developper and Epitech student</h2>
        </div>
        <div className="header__text__paragraph">
          <p>Passionate about web development, I am currently studying at Epitech, a school of computer science and digital technology. I am looking for an internship in web development.</p>
          
        </div>
      </section>
    </header>
  )
}

export default Header;