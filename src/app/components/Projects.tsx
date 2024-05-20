"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

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
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = PROJECT_DATA.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <div>
            <section id="projects">
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
                <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag
                        onClick={handleTagChange}
                        name="All"
                        isSelected={tag === "All"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Web"
                        isSelected={tag === "Web"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Mobile"
                        isSelected={tag === "Mobile"}
                    />
                </div>
                <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            imageUrl={project.image}
                            description={project.description}
                            previewUrl={project.previewUrl}
                            gitUrl={project.gitUrl} />
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Projects;