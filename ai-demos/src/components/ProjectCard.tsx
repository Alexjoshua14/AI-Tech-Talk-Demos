'use client'

import { Project } from "@/lib/schema/projectSchema";
import { Commissioner } from "next/font/google";

const commissioner = Commissioner({
    subsets: ["latin"],
    variable: "--font-commissioner",
    display: "swap",
    weight: ["400", "500", "600", "700"]
})

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="hover:scale-105 transition-all duration-500 flex flex-col justify-between gap-5 bg-zinc-200 bg-opacity-40 backdrop-blur-xl shadow-md rounded-md w-[270px] h-80 p-6 cursor-pointer">
            <div className="flex flex-col gap-3 overflow-hidden">
                <div className="w-full">
                    <h3 className={`text-2xl font-medium ${commissioner.className}`}>
                        {project.title}
                    </h3>
                    <p className="font-light">
                        {project.difficulty}
                    </p>
                </div>
                <div className="overflow-auto text-sm">
                    {project.shortDescription}
                </div>
            </div>
            <div className="flex flex-wrap space-x-3 space-y-1 text-sm font-light italic">
                {project.techStack.map((t, index) => (
                    <p className="whitespace-nowrap" key={`${project.title}-${t}-${index}`}>
                        {t}
                    </p>
                ))}
            </div>
        </div>
    )
}