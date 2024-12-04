import StoryCard from "@/components/story-card";
import StoryCreateCard from "@/components/story-create-card";
import { getStories } from "@/lib/actions";
import React from "react";

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
