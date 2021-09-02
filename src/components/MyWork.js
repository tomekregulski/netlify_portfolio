import { React, Component } from 'react';
// import Project from './Project';
// import projects from "../projects";
import projectArray from '../project-array';
import Card from './Card';
import ProjectModal from './ProjectModal';
class MyWork extends Component {
  state = {
    projects: {},
  };

  componentDidMount() {
    this.setState({
      projects: projectArray,
    });
  }
  mapProjects = () =>
    this.state.projects.length
      ? this.state.projects.map((project) => (
          //   <Project
          //     key={project.id}
          //     name={project.name}
          //     image={project.image}
          //     details={project.details}
          //     github={project.github}
          //     deployed={project.deployed}
          //   />
          <Card
            className='project-card'
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            technology={project.technology}
            github={project.github}
            deployed={project.deployed}
          />
        ))
      : null;

  render() {
    return (
      <>
        {/* <button onClick={() => this.setState({ show: true })}>
          Show Modal
        </button> */}
        {/* <ProjectModal
          onClose={() => this.setState({ show: false })}
          show={this.state.show}
        /> */}
        <section id='work'>{this.mapProjects()}</section>
      </>
    );
  }
}

export default MyWork;
