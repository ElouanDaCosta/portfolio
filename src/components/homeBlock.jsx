import React from "react";
import Header from "./header";
import ProfessionalExperience from "./professionalExperience";
import Work from "./work";
import Education from "./education";
import Skills from "./skills";
import Footer from "./footer";

function HomeBlock({ animation }) {
  return (
    <React.Fragment>
      <Header animation={animation} />
      <ProfessionalExperience />
      <Work />
      <Education />
      <Skills />
      <Footer />
    </React.Fragment>
  );
}

export default HomeBlock;