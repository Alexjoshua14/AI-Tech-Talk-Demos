import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';
import ProjectSchema, { ProjectListSchema } from '../schema/projectSchema';

export async function generateProjects() {
    const projects = []

    for (let i = 0; i < 7; i++) {
        const project = await generateObject({
            model: openai("gpt-4o"),
            schema: ProjectSchema,
            prompt: "Generate a random computer science projects that sound cool"
        })

        const parsedProject = ProjectSchema.parse(project.object)
        projects[i] = parsedProject
    }

    return projects
}