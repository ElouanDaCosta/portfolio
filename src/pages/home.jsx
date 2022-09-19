import React from "react";
import HomeBlock from "../components/homeBlock";

function Home() {

  const animation = (e) => {
    e.preventDefault();
    const image = document.querySelector(".header__image");
    image.setAttribute("class", "omgtoofunny");
  }

  

  return (
    <HomeBlock animation={animation}/>
  );
}

export default Home;