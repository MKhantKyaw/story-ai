import Link from "next/link";
import React from "react";
import { Story } from "@prisma/client";

type StoryCardProps = {
  story: Story;
};
export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link
      className="flex-1 basis-80 max-w-[420px] state-effects"
      href={`/story/${story.id}`}
    >
      <section className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md">
        <div className="h-[200px] bg-gradient-to-tr from-purple-400/50 via-blue-400 to-emerald-400/50 rounded-md" />
        <h3 className="text-2xl font-bold">{story.title}</h3>
        <p>
          {story.content.split(" ").slice(0, 10).join(" ") +
            (story.content.split(" ").length > 10 ? " ...Read More" : "")}
        </p>
      </section>
    </Link>
  );
}
