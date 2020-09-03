import React from 'react';
import './Portfolio.css';

export class Portfolio extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="projectContainer">
                {
                    this.props.projects.map(project => {
                        return (
                        <div className="project" id={project.position}>
                            <img className="projectImg" src={require(`../../Images/Portfolio/${project.img}`)}/> 
                            <h1>{project.title}</h1>
                            <ul>
                                {
                                    project.skills.map(skill => {
                                        return <li>{skill}</li>
                                    })
                                }
                            </ul>
                            <p>{project.description}</p>
                            <img className="gitImg" src={require('../../Images/Github.svg')} />
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}