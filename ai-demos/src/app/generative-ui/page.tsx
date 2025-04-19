'use server'
import { ProjectCard } from "@/components/ProjectCard"
import { generateProjects } from "@/lib/ai/projectGeneration"
import { Project, ProjectList, ProjectListSchema } from "@/lib/schema/projectSchema"


export default async function GenerativeUI() {

    const projects = await generateProjects()

    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center p-20 gap-4">
            <div className="h-min w-full flex items-center justify-center">
                <h1 className="text-5xl font-medium">
                    Generative UI Demo
                </h1>
            </div>

            <div className="h-full w-full flex flex-wrap gap-8 bg-secondary rounded-md bg-opacity-40 shadow-md max-w-4xl p-2">
                {projects.map(project => (
                    <ProjectCard project={project} />
                ))}

            </div>
        </div>
    )

}