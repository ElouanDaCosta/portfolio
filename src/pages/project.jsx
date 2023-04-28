import React, {Component} from "react";
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
    fetch("/data/projects.json")
      .then(response => {
        if(!response.ok) {
          throw new Error("error " + response.status);
        }
        return response.json();
      })
      .then(data => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const project = data.find(item => item.id === Number(id));
        //console.log(project.project_title);
        if (project) {
          this.setState({
            projectTitle: project.project_title,
            projectDescription: project.project_description,
            projectImage: project.project_image,
            projectPresentation: project.project_presentation,
            projectKeywords: project.project_keywords,
            projectExample: project.project_example,
            projectGithub: project.project_github,
          });
        }
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Menu />
        <section className="project-header">
          <div className="project-header__title">
            <h1>{this.state.projectTitle}</h1>
          </div>
          <div className="project-header__keywords">
            <div className="project-header__keywords__date">
              <p>2020</p>
            </div>
            <div className="project-header__keywords__keywords">
              <p>{this.state.projectKeywords}</p>
            </div>
          </div>
        </section>
        <section className="projectPresentation">
          <div className="projectPresentation__image">
            <img src={`../assets/project_images/${this.state.projectImage}`} alt=""/>
          </div>
          <div className="projectPresentation__text">
            <div className="projectPresentation__text__title">
              <h2>{this.state.projectTitle}</h2>
            </div>
            <div className="projectPresentation__text__secondtitle">
              <h3></h3>
            </div>
            <div className="projectPresentation__text__description">
              <p>{this.state.projectDescription}</p>
            </div>
          </div>
          <div className="projectPresentation__example">
            <div className="projectPresentation__example__image">
              <img src={this.state.projectExample} alt=""/>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Project;