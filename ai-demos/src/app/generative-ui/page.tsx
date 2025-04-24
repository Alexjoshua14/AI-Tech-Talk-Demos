
import { ProjectCard } from "@/components/ProjectCard"
import { ProjectContainer } from "@/components/ProjectContainer"
import { generateProjects } from "@/lib/ai/projectGeneration"
import { Suspense } from "react"

export default async function GenerativeUI() {

    return (
        <div className="w-screen min-h-screen flex flex-col justify-center items-center p-20 gap-4">
            <div className="h-min w-full flex items-center justify-center">
                <h1 className="text-5xl font-medium">
                    Generative UI Demo
                </h1>
            </div>
            <Suspense fallback={<h1 className="text-4xl">Loading..</h1>}>
                <ProjectContainer />
            </Suspense>
            
        </div>
    )

}