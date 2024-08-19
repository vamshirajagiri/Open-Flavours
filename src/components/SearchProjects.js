import React, { useState, useEffect } from 'react';
import './SearchProjects.css';

function SearchProjects() {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error loading projects:', error));
    }, []);

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-projects">
            <h2>Search Projects</h2>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="projects-container">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <p><strong>Stages:</strong> {project.stages}</p>
                            <p><strong>Author:</strong> {project.author}</p>
                            <p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            </p>
                            {project.free && <p className="free-badge">FREE</p>}
                        </div>
                    ))
                ) : (
                    <p>No matching projects found.</p>
                )}
            </div>
        </div>
    );
}

export default SearchProjects;
