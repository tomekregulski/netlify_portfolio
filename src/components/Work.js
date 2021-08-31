import React, { useState, useEffect } from 'react';
import Card from './Card';
import projectArray from '../project-array';
import '../styles/work2.css';

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectArray);
    console.log(projectArray);
  });

  function mapProjects() {
    projects.map((project) => (
      <Card
        key={project.id}
        // name={project.name}
        // image={project.image}
        // details={project.details[0]}
        // github={project.github}
        // deployed={project.deployed}
      />
    ));
  }

  return (
    <>
      <section id='work2'>{mapProjects}</section>
    </>
  );
};

export default Work;
