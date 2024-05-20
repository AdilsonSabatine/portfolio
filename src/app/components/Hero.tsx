"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {

    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm-text-left">
                    <h1 className="mb-4 text-4xl sm-text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4c9ae7] to-[#a5ccf3]">Olá, sou { }</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Adilson',
                                1000,
                                'Web Developer',
                                1000,
                                'Backend Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] sm:text-base text-lg lg:text-xl mb-6">
                        Sou um desenvolvedor apaixonado por transformar ideias em soluções digitais.
                        Tenho experiência em desenvolvimento backend e chatbots, atualmente buscando uma transição para fullstack.
                    </p>
                    <div>
                        <Link
                            href="https://www.linkedin.com/in/adilson-s-jr/"
                            download
                            target="/"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black m-3">
                            Me contrate
                        </Link>
                        <Link
                            href="/documents/CV_AdilsonSabatineJr.pdf"
                            download
                            target="/"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white m-3"
                        >
                            Download CV
                        </Link>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[400px] h-[400px] relative overflow-hidden">
                        <Image
                            src="/images/me.png"
                            alt="me"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;