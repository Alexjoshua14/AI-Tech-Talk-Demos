import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import ProjectListSchema, { DifficultyEnum } from '../schema/projectSchema';

export async function generateProjects() {
  try {
    const projects = await generateObject({
      model: openai("gpt-4.1"),
      output: "array",
      schema: ProjectListSchema,
      prompt: "Generate 10 random computer science projects that sound cool",
    });
    return projects.object;
  } catch (err) {
    console.log("Issue generating projects..\n", err)
    return [{
      title: "AI-Powered Music Genre Classifier",
      shortDescription: "Build a web app that uses machine learning to classify songs into genres based on audio features.",
      difficulty: DifficultyEnum.Enum.Moderate,
      techStack: ["Python", "TensorFlow", "Flask", "JavaScript"]
    }]
  }
  
}
