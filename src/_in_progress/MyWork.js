import { React, Component } from 'react';
import projectArray from '../src/project-array';
import Card from './Card';
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
          <Card
            className='project-card'
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            technology={project.technology}
            github={project.github}
            deployed={project.deployed}
            id={project.id}
          />
        ))
      : null;

  render() {
    return (
      <>
        <section id='work'>
          <h2>Featured Projects</h2>
          <div id='workCards'>{this.mapProjects()}</div>
        </section>
      </>
    );
  }
}

export default MyWork;
