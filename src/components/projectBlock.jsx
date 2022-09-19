import React from "react";
import Menu from "./menu";
import ProjectHeader from "./projectHeader";
import ProjectPresentation from "./projectPresentation";
import Footer from "./footer";

function ProjectBlock({ projectImage, projectPresentation, projectKeywords, projectTitle, projectDescription, projectExample }) {
  return (
    <React.Fragment>
      <Menu />
      <ProjectHeader 
      projectPresentation={projectPresentation}
      projectKeywords={projectKeywords}
      />
      <ProjectPresentation 
      projectImage={projectImage}
      projectTitle={projectTitle}
      projectDescription={projectDescription}
      projectExample={projectExample}
      />
      <Footer />
    </React.Fragment>
  )
}

export default ProjectBlock;