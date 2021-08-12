import { React, Component } from "react";
import Project from "./Project";
// import projects from "../projects";
import projectArray from "../project-array";
class MyWork extends Component {
    state = {
        projects: {},
    };
    
    componentDidMount() {
        console.log(projectArray);
        this.setState({
            projects: projectArray,
        })
    }
    mapProjects = () => this.state.projects.length 
        ? this.state.projects.map( project => (
            <Project 
                key={project.id}
                name={project.name}
                image={project.image}
                details={project.details}
                github={project.github}
                deployed={project.deployed}
            />
        ))
        : null

    render () {
        return (
            <section id="work">
                {this.mapProjects()}
            </section>
        );
    }
}    

export default MyWork;