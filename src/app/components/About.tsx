"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py16 xl:px-16">
                <Image
                    src="/images/computer.jpeg"
                    alt="me"
                    width={500}
                    height={500}
                />
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rerum qui sapiente labore esse, tempora culpa consectetur quo quaerat suscipit quibusdam! Blanditiis molestiae ducimus ea dolore, culpa obcaecati similique impedit.
                    </p>
                </div>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                </div>
            </div>
        </section>
    );
}

export default About;