"use client"

import Image from "next/image";
import { useState } from "react";

export default function HomeProjectsSection() {
    const [category, setCategory] = useState("Web Design");

    const categories = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"];

    return (
        <section id="my-projects" className="pt-[120px]">
            <div className="mb-10 text-center">
                <h1 className="text-[44px] font-semibold text-second">My Projects</h1>
                <p className="text-second/80 mt-4">
                    Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br className="md:block hidden" />
                    lectus. Phasellus consequat urna tellus
                </p>
            </div>
            <div className="flex mt-20 justify-center items-center space-x-3">
                {categories.map((item) => (
                    <button
                        key={item}
                        className={`btn btn-ghost border border-black/10 ${
                            item === category ? "bg-main text-white" : ""
                        }`}
                        onClick={() => setCategory(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
                <div className="">
                    <Image
                        draggable="false"
                        src="/images/project1.png"
                        alt="[Project 1]"
                        width={1000}
                        height={1000}
                        className="mt-10"
                    />
                    <p className="text-lg font-normal text-main mt-8 mb-3">Web Design</p>
                    <h5 className="text-2xl font-bold">AirCalling Landing Page Design</h5>
                </div>
                <div className="">
                    <Image
                        draggable="false"
                        src="/images/project2.png"
                        alt="[Project 2]"
                        width={1000}
                        height={1000}
                        className="mt-10"
                    />
                    <p className="text-lg font-normal text-main mt-8 mb-3">Web Design</p>
                    <h5 className="text-2xl font-bold">Business Landing Page Design</h5>
                </div>
                <div className="">
                    <Image
                        draggable="false"
                        src="/images/project3.png"
                        alt="[Project 3]"
                        width={1000}
                        height={1000}
                        className="mt-10"
                    />
                    <p className="text-lg font-normal text-main mt-8 mb-3">Web Design</p>
                    <h5 className="text-2xl font-bold">Ecom Web Page Design</h5>
                </div>
            </div>
        </section>
    );
}