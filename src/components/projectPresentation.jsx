import React from "react";

function projectPresentation ({ projectImage, projectTitle, projectDescription, projectExample }) {
  return (
    <section className="projectPresentation">
      <div className="projectPresentation__image">
        <img src={require(projectImage)} alt=""/>
      </div>
      <div className="projectPresentation__text">
        <div className="projectPresentation__text__title">
          <h2>{projectTitle}</h2>
        </div>
        <div className="projectPresentation__text__secondtitle">
          <h3></h3>
        </div>
        <div className="projectPresentation__text__description">
          <p>{projectDescription}</p>
        </div>
      </div>
      <div className="projectPresentation__example">
        <div className="projectPresentation__example__image">
          <img src={projectExample}/>
        </div>
      </div>

    </section>
  );
}

export default projectPresentation;