import React from "react";

function Header ({ animation }) {
  return (
    <header className="header" id="home">
      <section className="header__text">
        <div className="header__text__title">
          <h1 className="header__text__name">Hi, I'm <span className="header__text__name__highlight">Elouan</span>, web developper and Epitech student</h1>
        </div>
        <div className="header__text__paragraph">
          <p>Passionate about web development, I am currently studying at Epitech, a school of computer science and digital technology. I am looking for an internship in web development.</p>
          
        </div>
      </section>
      <div
      onClick={animation}
      className="header__image">
        <img src={require("../assets/me.jpg")} alt="Elouan Da Costa Peixoto" />
      </div>
    </header>
  )
}

export default Header;