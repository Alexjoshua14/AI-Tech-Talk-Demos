"use client"

import { ProjectCard } from "@/components/ProjectCard"
import { Project } from "@/lib/schema/projectSchema"


export default function GenerativeUI() {

    const projects: Project[] = [{
        title: "Sample",
        difficulty: "Moderate",
        shortDescription: "Short description of project",
        techStack: ["Nextjs", "Zod", "Vercel AI SDK"]
    }]

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center p-20 gap-4">
            <div className="h-min w-full flex items-center justify-center">
                <h1 className="text-5xl font-medium">
                    Generative UI Demo
                </h1>
            </div>

            <div className="h-full w-full flex flex-col bg-secondary rounded-md bg-opacity-40 shadow-md max-w-4xl">
                {projects.map(project => (
                    <ProjectCard project={project} />
                ))}

            </div>
        </div>
    )

}