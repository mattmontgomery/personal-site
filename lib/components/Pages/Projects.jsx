import React from 'react';
import ProjectsDefinition from './ProjectsDefinition';

var Projects = React.createClass({
    getDefaultProps() {
        return {
            projects: ProjectsDefinition
        }
    },
    renderProject(project, projectIdx) {
        return (
            <div className="page-projects__list-item" key={projectIdx}>
                {JSON.stringify(project)}
            </div>
        );
    },
    render() {
        console.log(this.props.projects);
        return (
            <div className="page-projects">
                <div className="page-projects__list">
                    {this.props.projects.map(this.renderProject)}
                </div>
            </div>
        );
    }
});

export default Projects;
