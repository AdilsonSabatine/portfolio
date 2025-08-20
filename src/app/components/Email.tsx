"use client"
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";


const GithubIcon = "/svgs/github-icon.svg";
const LinkedinIcon = "/svgs/linkedin-icon.svg";

const Email = () => {
    const { texts } = useLanguage();
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
                <h5 className="text-xl font-bold text-white my-2">{texts.contact.title}</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {texts.contact.description}
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href={"https://github.com/AdilsonSabatine"} target="/">
                        <Image src={GithubIcon} height={64} width={64} alt={"Github Icon"} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/adilson-s-jr/"} target="/">
                        <Image src={LinkedinIcon} height={64} width={64} alt={"Linkedin Icon"} />
                    </Link>
                </div>
            </div>

            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">{texts.contact.form.email.label}</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            required
                            className="bg-[#18191E] border-[#33352F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder={texts.contact.form.email.placeholder}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">{texts.contact.form.subject.label}</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            required
                            className="bg-[#18191E] border-[#33352F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder={texts.contact.form.subject.placeholder}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">{texts.contact.form.message.label}</label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border-[#33352F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder={texts.contact.form.message.placeholder}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#4c9ae7] hover:bg-[#358ce3] text-white font-medium py-2.5 px-5 w-full rounded-lg"
                    >
                        {texts.contact.form.send}
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