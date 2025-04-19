import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";
import ProjectSchema, { ProjectListSchema } from "../schema/projectSchema";

export async function generateProjects() {
  const projects = [];

  //   for (let i = 0; i < 7; i++) {
  const project = await generateObject({
    model: openai("gpt-4.1-mini"),
    output: "array",
    schema: ProjectListSchema,
    prompt: "Generate 10 random computer science projects that sound cool",
  });

  const parsedProject = ProjectListSchema.parse(
    project.object.reduce((acc, project) => ({ ...acc, project }))
  );
  // projects[i] = parsedProject;
  //   }

  //   return projects;
  return parsedProject;
}
