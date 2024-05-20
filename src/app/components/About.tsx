"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Javascript</li>
                <li>Java Spring Boot</li>
                <li>SQL</li>
                <li>AWS (SQS, Lambda)</li>
                <li>Google Cloud</li>
                <li>IBM Watson</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>ETEC Hortolandia - Informatico - Técnico</li>
                <li>FATEC Hortolandia - Gestão de TI - Técnologo</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Customer Service</li>
                <li>Backend Development</li>
                <li>Chatbots 🤖</li>
            </ul>
        ),
    },
]

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py16 xl:px-16">
                <Image
                    src="/images/computer.jpeg"
                    alt="me"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
                    <p className="text-base lg:text-lg">
                        Comecei minha carreira trabalhando com curadoria de chatbots e nesse período tive a oportunidade de trabalhar no backend que integrava os chatbots a ITSMs e APIs. 
                        Depois de ganhar experiência com desenvolvimento passei a atuar em outros projetos web, sempre atuando no backend criando APIs.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Educação</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experiência</TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;