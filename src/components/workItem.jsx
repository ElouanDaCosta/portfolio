import React, { Component } from "react";
//import { useNavigate } from 'react-router-dom';

class WorkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workTitle: null,
      workDescription: '',
      workImage: '',
      workDate: '',
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
          this.setState({
            workTitle: data.project_title,
            workDescription: data.project_description,
            workImage: data.project_image,
            workDate: data.project_keywords_date,
          });
        })
        .catch(error => {
          console.log("error " + error);
        });
  }

  render() {
    return (
      <div className="portfolio__list__item">
        <div className="portfolio__list__item__image">
          <img 
          onClick={() => navigate(`/project?id=1`)}
          src={require("../assets/booki.png")} alt="website of booki, a front-end web project" />
        </div>
          <div className="portfolio__list__item__title">
            <h3>{this.state.workTitle}</h3>
          </div>
          <div className="portfolio__list__item__description">
            <div className="portfolio__list__item__description__date">
              <p>{this.state.workDate}</p>
            </div>
            <div className="portfolio__list__item__description__paragraph">
              <p>{this.state.workDescription}</p>
            </div>
          </div>
      </div>
    );
  }
} 

export default WorkItem;