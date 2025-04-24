import { generateProjects } from "@/lib/ai/projectGeneration"
import { ProjectCard } from "./ProjectCard"


export const ProjectContainer = async () => {
    const projects = await generateProjects()
    
    return (
        <div className="h-full w-full flex flex-wrap gap-8 bg-secondary rounded-md bg-opacity-40 shadow-md max-w-4xl p-2">
            {projects.map((project, index) => (
                <ProjectCard key={`${project.title}-${index}`} project={project} />
            ))}
        </div>
    )
}