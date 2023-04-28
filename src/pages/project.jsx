import React, {Component} from "react";
import axios from "axios";
import Menu from "../components/menu";
import Footer from "../components/footer";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTitle: null,
      projectDescription: '',
      projectImage: '',
      projectPresentation: '',
      projectKeywords: '',
      projectExample: '',
      projectGithub: '',
    };
  }

  componentDidMount() {
    fetch("../data/projects.json")
      .then(response => {
        if(!response.ok) {
          throw new Error("error " + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const project = data.find(project => project.id === id);
        console.log(project);
        this.setState({
          projectTitle: project.title,
          projectDescription: project.description,
          projectImage: project.image,
          projectPresentation: project.presentation,
          projectKeywords: project.keywords,
          projectExample: project.example,
          projectGithub: project.github,
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  render(projectImage, projectPresentation, projectKeywords, projectTitle, projectDescription, projectExample, projectGithub) {
    return (
      <React.Fragment>
        <Menu />
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
        <section className="projectPresentation">
          <div className="projectPresentation__image">
            <img src={projectImage} alt=""/>
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
              <img src={projectExample} alt=""/>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Project;