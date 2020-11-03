import React from 'react';
import './Portfolio.css';
import ScrollAnimation from 'react-animate-on-scroll';

export class Portfolio extends React.Component {
    render() {
        return (
            <div className="projectContainer">
                {
                    this.props.projects.map(project => {
                        return (
                        <ScrollAnimation className="delay3" animateIn="fadeUp" animateOnce="true">
                            <div className="project" id={project.position}>
                                <a href={project.website} target='_blank' rel="noopener noreferrer"><img className="projectImg" src={require(`../../Images/Portfolio/${project.img}`)} alt=""/></a>
                                <h1>{project.title}</h1>
                                <ul>
                                    {
                                        project.skills.map(skill => {
                                            return <li>{skill}</li>
                                        })
                                    }
                                </ul>
                                <p>{project.description}</p>
                                <a href={project.gitlink} target='_blank' rel="noopener noreferrer"><img className="gitImg" src={require('../../Images/Github.svg')} alt="" /></a>
                            </div>
                        </ScrollAnimation>
                        )
                    })
                }
            </div>
        )
    }
}