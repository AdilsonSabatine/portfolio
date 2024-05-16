import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm-text-left">
                    <h1 className="text-white mb-4 text-4xl sm-text-5xl lg:text-6xl font-extrabold">
                        Hello, I'm Adilson
                    </h1>
                    <p className="text-[#ADB7BE] sm:text-base text-lg lg:text-xl mb-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis dignissimos pariatur. Illum, voluptatum. Asperiores alias recusandae nam vero facilis! Quod quaerat suscipit exercitationem voluptates expedita odit id. Ipsam, vitae.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-black m-3">Hire Me</button>
                        <button className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-transparent hover:bg-slate-800 text-white border border-white m-3">Download CV</button>
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