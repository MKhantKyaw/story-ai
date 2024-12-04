"use server";

import { notFound, redirect } from "next/navigation";
import prisma from "./db";

//server action for generating a story after form submission
export const generateStory = async (formData: FormData) => {
  const character = formData.get("character");
  const place = formData.get("place");
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ character, place }),
  });
  const data = await response.json();
  console.log(data);
  const newStory = await prisma.story.create({
    data: {
      title: data.title,
      content: data.story,
      imageUrl: data.imageUrl,
    },
  });

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
