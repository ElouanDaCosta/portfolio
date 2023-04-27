import React, {useState, useEffect} from "react";
import ProjectBlock from "../components/projectBlock";


function Project() {

const [projectImage, setProjectImage] = useState('booki.png');
const [projectPresentation, setProjectPresentation] = useState('Reprehenderit in consectetur sunt voluptate anim cupidatat id minim sit anim sed occaecat ipsum non quis sit laboris velit. Cillum labore laboris excepteur est id ad excepteur cupidatat aliqua sunt tempor magna incididunt pariatur. Adipiscing velit sit cillum elit nulla non anim magna voluptate do elit exercitation occaecat id nulla fugiat qui. Aliqua eiusmod consequat aliquip mollit commodo elit ad laborum esse reprehenderit anim consequat eiusmod aliquip mollit sit. In eiusmod sit irure dolore sint consectetur eiusmod minim sunt culpa culpa aute aute. Qui culpa proident ipsum cupidatat sunt reprehenderit nisi culpa sit cillum reprehenderit. Nisi veniam ex enim sed ea nulla incididunt ex incididunt. In lorem ut dolore incididunt id deserunt proident irure aliqua duis dolore. Nulla quis mollit labore cupidatat aliquip velit et et incididunt lorem laboris nulla pariatur nostrud sed do culpa. Sunt culpa veniam quis commodo esse qui esse proident fugiat ad incididunt reprehenderit enim occaecat incididunt dolore. Cupidatat consectetur do amet sed enim deserunt sint incididunt sit magna anim reprehenderit non velit ex. Est quis sint ea commodo id in deserunt sunt duis esse. Commodo qui nostrud magna consequat aliqua mollit reprehenderit amet consequat adipiscing. Exercitation id ex esse aliqua ut ipsum nostrud adipiscing aliqua in excepteur fugiat. Tempor do in id ex consequat ex tempor irure culpa. Mollit incididunt ea commodo pariatur laborum excepteur minim exercitation mollit consectetur ad sit. Esse enim non sunt minim fugiat qui laboris velit ad occaecat in cillum irure est sed sit. Velit deserunt tempor deserunt ipsum eu tempor laborum sunt et ut voluptate excepteur deserunt enim.');
const [projectKeywords, setProjectKeywords] = useState('pipi caca zizi');
const [projectTitle, setProjectTitle] = useState(null);
const [projectDescription, setProjectDescription] = useState('Reprehenderit in consectetur sunt voluptate anim cupidatat id minim sit anim sed occaecat ipsum non quis sit laboris velit. Cillum labore laboris excepteur est id ad excepteur cupidatat aliqua sunt tempor magna incididunt pariatur. Adipiscing velit sit cillum elit nulla non anim magna voluptate do elit exercitation occaecat id nulla fugiat qui. Aliqua eiusmod consequat aliquip mollit commodo elit ad laborum esse reprehenderit anim consequat eiusmod aliquip mollit sit. In eiusmod sit irure dolore sint consectetur eiusmod minim sunt culpa culpa aute aute. Qui culpa proident ipsum cupidatat sunt reprehenderit nisi culpa sit cillum reprehenderit. Nisi veniam ex enim sed ea nulla incididunt ex incididunt. In lorem ut dolore incididunt id deserunt proident irure aliqua duis dolore. Nulla quis mollit labore cupidatat aliquip velit et et incididunt lorem laboris nulla pariatur nostrud sed do culpa. Sunt culpa veniam quis commodo esse qui esse proident fugiat ad incididunt reprehenderit enim occaecat incididunt dolore. Cupidatat consectetur do amet sed enim deserunt sint incididunt sit magna anim reprehenderit non velit ex. Est quis sint ea commodo id in deserunt sunt duis esse. Commodo qui nostrud magna consequat aliqua mollit reprehenderit amet consequat adipiscing. Exercitation id ex esse aliqua ut ipsum nostrud adipiscing aliqua in excepteur fugiat. Tempor do in id ex consequat ex tempor irure culpa. Mollit incididunt ea commodo pariatur laborum excepteur minim exercitation mollit consectetur ad sit. Esse enim non sunt minim fugiat qui laboris velit ad occaecat in cillum irure est sed sit. Velit deserunt tempor deserunt ipsum eu tempor laborum sunt et ut voluptate excepteur deserunt enim.');
const [projectExample, setProjectExample] = useState('123');

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