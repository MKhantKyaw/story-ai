import StoryCard from "@/components/story-card";
import StoryCreateCard from "@/components/story-create-card";
import { getStories } from "@/lib/actions";
import { Metadata } from "next";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 10;
export function generateMetadata(): Metadata {
  return {
    title: "My Stories",
    description: "Create and view your stories",
  };
}

export default async function StoryListPage() {
  const stories = await getStories();
  return (
    <main className="flex flex-col items-center p-8 mt-2">
      <h1 className="text-4xl font-bold mb-8">My Stories</h1>
      <div className="flex flex-wrap gap-10 justify-center mx-4 lg:mx-32 ">
        <StoryCreateCard />
        {stories.map((story) => (
          <StoryCard story={story} key={story.id} />
        ))}
      </div>
    </main>
  );
}
