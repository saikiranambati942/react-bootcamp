import React from 'react';
import PROJECTS from '../data/projects';



const Project = props => {
    const { title, image, description, link } = props.project;
    return (
        <div style={{ display: 'inline-block', width: 450, margin: 30 }}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 300, height: 200 }} />
            <p> {description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}






const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>

)


export default Projects;