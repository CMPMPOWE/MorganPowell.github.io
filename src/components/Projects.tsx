import React from 'react';

interface Project {
    name: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        name: 'Project 1',
        description: 'A cool project that does X.',
        link: 'https://github.com/yourusername/project1'
    },
    {
        name: 'Project 2',
        description: 'A web app built using React and Node.js.',
        link: 'https://github.com/yourusername/project2'
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.name} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
