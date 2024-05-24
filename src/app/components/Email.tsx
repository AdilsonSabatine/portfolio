"use client"
import React, { FormEvent, useState } from "react";
import GithubIcon from "../../../public/svgs/github-icon.svg";
import LinkedinIcon from "../../../public/svgs/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Email = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        }

        const endpoint = "/api/send";
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);
        if (response.status === 200) {
            setEmailSubmitted(true);
            console.log('Message sent')
        }
    }

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6 relative" id="contact">
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Atualmente estou procurando novas oportunidades, meu inbox está sempre aberto.
                    Se você tem uma pergunta ou quer só falor um oi, farei meu melhor pra entrar contato com você!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href={"https://github.com/AdilsonSabatine"} target="/">
                        <Image src={GithubIcon} alt={"Github Icon"} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/adilson-s-jr/"} target="/">
                        <Image src={LinkedinIcon} alt={"Linkedin Icon"} />
                    </Link>
                </div>
            </div>

            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            required
                            className="bg-[#18191E] border-[#33352F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="sindri@gmail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            required
                            className="bg-[#18191E] border-[#33352F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Só falando um oi!"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border-[#33352F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Vamos falar sobre"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#4c9ae7] hover:bg-[#358ce3] text-white font-medium py-2.5 px-5 w-full rounded-lg"
                    >
                        Send Message
                    </button>
                    <button>
                        {
                            emailSubmitted && (
                                <p className="text-green-500 text-sm mt-2">
                                    Email sent successfully!
                                </p>
                            )
                        }
                    </button>
                </form>
            </div>
        </section >
    );
}

export default Email;