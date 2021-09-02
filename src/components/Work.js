import React, { useState, useEffect } from 'react';
import Card from './Card';
import projectArray from '../project-array';
import '../styles/work2.css';

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectArray);
    console.log(projectArray);
  }, []);

  function mapProjects() {
    if (projects.length) {
      console.log(projects);
      projects.map((project) =>
        console.log(project.name)
        // <Card
        //   key={project.id}
        //   name={project.name}
        //   image={project.image}
        //   // details={project.details[0]}
        //   // github={project.github}
        //   // deployed={project.deployed}
        // />
        // <div>
        //   <p>{project.name}</p>
        // </div>
      );
    }
  }

  return (
    <>
      <section id='work2'>{mapProjects()}</section>
    </>
  );
};

export default Work;
