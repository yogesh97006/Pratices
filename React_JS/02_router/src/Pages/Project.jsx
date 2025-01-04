import React from 'react';

const projects = [
    {
        name: 'Project One',
        description: 'This is a description for project one.',
        link: 'https://www.projectone.com'
    },
    {
        name: 'Project Two',
        description: 'This is a description for project two.',
        link: 'https://www.projecttwo.com'
    },
    {
        name: 'Project Three',
        description: 'This is a description for project three.',
        link: 'https://www.projectthree.com'
    }
];

const Project = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Visit {project.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Project;