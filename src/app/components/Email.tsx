"use client"
import GithubIcon from "../../../public/svgs/github-icon.svg";
import LinkedinIcon from "../../../public/svgs/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Email = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
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
            console.log('Message sent')
        }
    }

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
            </div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Wheter you have a question or just want to say hi, I&apos;ll try my best to get back to you!
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
                            placeholder="Just saying hi!"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border-[#33352F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-red-700 hover:bg-red-800 text-white font-medium py-2.5 px-5 w-full rounded-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section >
    );
}

export default Email;