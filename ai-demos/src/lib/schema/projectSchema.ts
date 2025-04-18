import { z } from "zod"

const DifficultyEnum = z.enum([
    "Easy",
    "Moderate",
    "Hard",
    "Expert"
])

const ProjectSchema = z.object({
    title: z.string().describe("Project Title"),
    shortDescription: z.string().max(250).describe("Short description of project"),
    techStack: z.array(z.string().max(20).describe("Framework, dev tool, or other similar thing")),
    difficulty: DifficultyEnum,
})

export const ProjectListSchema = z.array(ProjectSchema).max(10)

export type Project = z.infer<typeof ProjectSchema>
export type ProjectList = z.infer<typeof ProjectListSchema>

export default ProjectSchema