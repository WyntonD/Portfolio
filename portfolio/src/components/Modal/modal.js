import React, {useState} from 'react';

function ProjectModal() {
    const [projects, setProject] = useState({
        project1: "Wyntluger Beats",
        p1d: "A description about wyntluger",
        project2: "LIRI Node App",
        p2d:"A description about liri",
        project3: "Google Books Search",
        p3d: "A description for google"
    })
    

    return (
        <div>
            <button>
            {projects.project1}
            </button>
            <p>{projects.p1d}</p>
        </div>
    )
}

export default ProjectModal