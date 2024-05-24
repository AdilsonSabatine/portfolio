"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECT_DATA = [
    {
        id: 1,
        title: "Portfolio",
        description: "Esse portifolio. Meu primeiro projeto usando Next.js, feito como forma de estudo.",
        image: "/images/projects/portfolio.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/AdilsonSabatine/portfolio",
        previewUrl: "https://sabatinedev.vercel.app/",
    },
    {
        id: 2,
        title: "Music Manager",
        description: "Ainda em desenvolvimento, um web app simples para gerenciar e importar exportar músicas curtidas do Spotify para o Youtube Music e vice versa.",
        image: "/images/projects/musicmanager.jpg",
        tag: ["Web", "All"],
        gitUrl: "https://github.com/AdilsonSabatine/music-library",
        previewUrl: "/",
    }
]

const Projects = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }

    const filteredProjects = PROJECT_DATA.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <div>
            <section id="projects">
                <h2 className="text-center text-4xl font-bold text-white mt-7 md:mb-12">Meus projetos</h2>
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