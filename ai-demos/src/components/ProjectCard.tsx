import { Project } from "@/lib/schema/projectSchema";


export const ProjectCard = ({project}: {project: Project}) => {
    return (
        <div className="flex flex-col gap-2 bg-slate-300 bg-opacity-15 rounded-md w-60 h-min p-6">
            <div className="w-full">
                <h3 className="text-2xl font-medium">
                    {project.title}
                </h3>
                <p className="font-light">
                    {project.difficulty}
                </p>
            </div>
            <div>
                {project.shortDescription}
            </div>
        </div>
    )
}