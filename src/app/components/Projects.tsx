import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECT_DATA = [
    {
        id: 1,
        title: "Music Manager",
        description: "A simple app to manage e import/export music from Spotify to Youtube and vice versa",
        image: "/images/projects/musicmanager.jpg",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/",
    }
]

const Projects = () => {
    return (
        <div>
            <section>
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
                <div>
                    {PROJECT_DATA.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            imageUrl={project.image}
                            description={project.description}
                            previewUrl={project.previewUrl}
                            gitUrl={project.gitUrl} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;