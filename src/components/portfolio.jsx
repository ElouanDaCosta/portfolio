import React from "react";
import { useNavigate } from 'react-router-dom';

function Portfolio() {
  const navigate = useNavigate();
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__title">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio__list">
        <div className="portfolio__list__item">
          <div className="portfolio__list__item__image">
            <img 
            onClick={() => navigate(`/project?id=1`)}
            src={require("../assets/booki.png")} alt="website of booki, a front-end web project" />
          </div>
          <div className="portfolio__list__item__title">
            <h3>Booki</h3>
          </div>
          <div className="portfolio__list__item__description">
            <div className="portfolio__list__item__description__date">
              <p>2022</p>
            </div>
            <div className="portfolio__list__item__description__paragraph">
              <p>Create a reservation static website using HTML and CSS wuth a model.</p>
            </div>
          </div>
        </div>
        <div className="portfolio__list__item">
          <div className="portfolio__list__item__image">
            <img 
            onClick={() => navigate(`/project?id=2`)}
            src={require("../assets/ohmyfood.png")} alt="website of booki, a front-end web project" />
          </div>
          <div className="portfolio__list__item__title">
            <h3>Ohmyfood</h3>
          </div>
          <div className="portfolio__list__item__description">
            <div className="portfolio__list__item__description__date">
              <p>2022</p>
            </div>
            <div className="portfolio__list__item__description__paragraph">
              <p>Create a restaurant website with multiple animation using HTML and SCSS.</p>
            </div>
          </div>
        </div>
        <div className="portfolio__list__item">
          <div className="portfolio__list__item__image">
            <img 
            onClick={() => navigate(`/project?id=3`)}
            src={require("../assets/lapanthere.png")} alt="website of booki, a front-end web project" />
          </div>
          <div className="portfolio__list__item__title">
            <h3>La Panthère</h3>
          </div>
          <div className="portfolio__list__item__description">
            <div className="portfolio__list__item__description__date">
              <p>2022</p>
            </div>
            <div className="portfolio__list__item__description__paragraph">
              <p>Optimize a existing website, increase performance, accessibility and SEO.</p>
            </div>
          </div>
        </div>
        <div className="portfolio__list__item">
          <div className="portfolio__list__item__image">
            <img 
            onClick={() => navigate(`/project?id=4`)}
            src={require("../assets/kanap.png")} alt="website of booki, a front-end web project" />
          </div>
          <div className="portfolio__list__item__title">
            <h3>Kanap</h3>
          </div>
          <div className="portfolio__list__item__description">
            <div className="portfolio__list__item__description__date">
              <p>2022</p>
            </div>
            <div className="portfolio__list__item__description__paragraph">
              <p>Integrate an REST API to a e-commerce website using javascript.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;