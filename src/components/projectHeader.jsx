import React from "react";

function ProjectHeader({ projectPresentation, projectKeywords }) {
  return (
    <section className="project-header">
      <div className="project-header__title">
        <h1>{projectPresentation}</h1>
      </div>
      <div className="project-header__keywords">
        <div className="project-header__keywords__date">
          <p>2020</p>
        </div>
        <div className="project-header__keywords__keywords">
          <p>{projectKeywords}</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectHeader;