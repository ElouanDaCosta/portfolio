import React, {useState, useEffect} from "react";
import ProjectBlock from "../components/projectBlock";


function Project() {

const [projectImage, setProjectImage] = useState('');
const [projectPresentation, setProjectPresentation] = useState('');
const [projectKeywords, setProjectKeywords] = useState('');
const [projectTitle, setProjectTitle] = useState(null);
const [projectDescription, setProjectDescription] = useState('');
const [projectExample, setProjectExample] = useState('');

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


useEffect(() => {
  if (id === "1") {
    setProjectTitle("Booki");
    
  }

}, [projectTitle]);

  return (
    <ProjectBlock 
    projectImage={projectImage}
    projectPresentation={projectPresentation}
    projectKeywords={projectKeywords}
    projectTitle={projectTitle}
    projectDescription={projectDescription}
    projectExample={projectExample}
    />
  );
}

export default Project;