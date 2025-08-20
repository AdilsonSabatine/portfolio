"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
    const [tag, setTag] = useState("All");
    
  const { projects, texts } = useLanguage();

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }

    const filteredProjects = projects.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <div>
            <section id="projects">
                <h2 className="text-center text-4xl font-bold text-white mt-7 md:mb-12">{texts.projects.title}</h2>
                <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag
                        onClick={handleTagChange}
                        name={texts.projects.tags.all}
                        isSelected={tag === "All"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={texts.projects.tags.web}
                        isSelected={tag === "Web"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={texts.projects.tags.mobile}
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