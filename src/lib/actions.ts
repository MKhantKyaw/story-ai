"use server";

import { notFound, redirect } from "next/navigation";
import prisma from "./db";

//server action for generating a story after form submission
export const generateStory = async (formData: FormData) => {
  const { character, place, genre, name, goal, challenges } =
    Object.fromEntries(formData.entries());

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log(baseUrl);

  const response = await fetch(`${baseUrl}/api/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ character, place, genre, name, goal, challenges }),
  });
  const data = await response.json();
  console.log(data);
  const newStory = await prisma.story.create({
    data: {
      title: data.title,
      content: data.story,
      imageUrl: data.imageUrl,
      // imageUrl:
      //   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-oztsODLCN4wofY4imctfnFIZ/user-A46aW81lKuPWZiIM39z8q8uJ/img-X4pVs7wALXXF7FoE46K00yoc.png?st=2024-12-03T22%3A10%3A17Z&se=2024-12-04T00%3A10%3A17Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-03T00%3A15%3A12Z&ske=2024-12-04T00%3A15%3A12Z&sks=b&skv=2024-08-04&sig=AViiDb7NlSYx/zWGh1PHWFwiT0O3KQ6wj2QcbbsYma0%3D",
    },
  });

  console.log(newStory);
  redirect(`/story/${newStory.id}`);

  //to develop and design the loader
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // redirect(`/story/cm48ul03q000gv2347wtqnuk3`);
};

//server action for fetching a story after redirection or selction from the story list
export const getStory = async (id: string) => {
  const story = await prisma.story.findUnique({
    where: {
      id: id,
    },
  });
  if (!story) {
    return notFound();
  }
  return story;
};

//server action for fetching all stories
export const getStories = async () => {
  const stories = await prisma.story.findMany();
  return stories;
};
