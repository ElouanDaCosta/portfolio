import React from "react";

function Education () {
  return (
    <section className="education">
      <div className="education__title">
        <h2>Education</h2>
      </div>
        <div className="education__degree">
          <div className="education__degree__image">
            <img src={require("../assets/openclassroom.png")} alt="Openclassrooms logo"/>
          </div>
          <div className="temp">
            <div className="education__degree__section">
              <div className="education__degree__section__title">
                <h3>OpenclassRooms</h3>
              </div>
              <span>|</span>
              <div className="education__degree__section__level">
                <p>RNCP 5</p>
              </div>
            </div>
            <div className="education__degree__section">
              <div className="education__degree__section__job">
                <h4>Web Developer</h4>
              </div>
              <div className="education__degree__section__date">
                <p>2022 - 2022</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Education;