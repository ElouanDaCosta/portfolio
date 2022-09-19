import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list__element"><a href="https://twitter.com/elouanlepelican"><img src={require("../assets/twitter.png")} alt="Twitter"/></a></li>
        <li className="footer__list__element"><a href="https://github.com/ElouanDaCosta"><img src={require("../assets/github.png")} alt="Github"/></a></li>
        <li className="footer__list__element"><a href="https://www.linkedin.com/in/elouan-da-costa-peixoto-1646bb229/"><img src={require("../assets/linkedin.png")} alt="Linkedin"/></a></li>
      </ul>
      <ul className="footer__contact" id="contact">
        <li>06 10 59 29 52</li>
        <li><a href="mailto:elouandacostapeixoto@gmail.com">elouandacostapeixoto@gmail</a></li>
      </ul>
      <div className="footer__text">
        <p>© 2022 Elouan Da Costa Peixoto</p>
      </div>
    </footer>
  );
}

export default Footer;