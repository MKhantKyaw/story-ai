import { PlusCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function StoryCreateCard() {
  return (
    <Link
      className="flex-1 basis-80 max-w-[420px] border-2 border-slate-400 border-dashed"
      href="/"
    >
      <div className="max-h-[500px] min-h-[300px] h-full flex flex-col items-center justify-center">
        <PlusCircledIcon className="w-[50px] h-[50px] text-slate-400" />
        <p>Create a story</p>
      </div>
    </Link>
  );
}
