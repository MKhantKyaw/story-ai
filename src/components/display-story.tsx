"use client";
import React from "react";
import { Story } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import HTMLFlipBook from "react-pageflip";

type StoryType = {
  story: Story;
};

type FontSize = "text-sm" | "text-base" | "text-lg";

export default function StoryDisplay({ story }: StoryType) {
  const [fontSize, setFontSize] = useState<FontSize>("text-lg");
  // Split the story content into sentences
  const storyContent = story.content
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0)
    .map((sentence) => sentence + ".");

  return (
    <section>
      <nav className="flex gap-2 justify-end">
        <h4 className="text-base font-semibold">Font size:</h4>
        <div>
          <Button
            setFontSize={setFontSize}
            size={"text-sm"}
            currentFontSize={fontSize}
          >
            Small
          </Button>
          <Button
            setFontSize={setFontSize}
            size={"text-base"}
            currentFontSize={fontSize}
          >
            Medium
          </Button>
          <Button
            setFontSize={setFontSize}
            size={"text-lg"}
            currentFontSize={fontSize}
          >
            Large
          </Button>
        </div>
      </nav>
      <article>
        <h2 className="text-4xl mb-8 font-bold">{story.title}</h2>
        <div className="flex justify-center">
          <HTMLFlipBook
            width={550}
            height={650}
            minWidth={200}
            maxWidth={1000}
            minHeight={420}
            maxHeight={1350}
            showCover={true}
            className="cursor-pointer"
            style={{}}
            startPage={0}
            size="fixed"
            drawShadow={true}
            flippingTime={1000}
            useMouseEvents={true}
            swipeDistance={30}
            clickEventForward={true}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.5}
            showPageCorners={true}
            disableFlipByClick={false}
            mobileScrollSupport={true}
          >
            <Image
              src={story.imageUrl}
              alt={story.title}
              width={400}
              height={400}
            />
            {storyContent.map((story, i) => (
              <div key={i} className="relative">
                <div className="h-full p-4 flex items-center justify-center bg-gradient-to-tr from-purple-400/50 via-blue-300 to-red-400/50">
                  <div className="bg-slate-50 p-8 rounded-lg">
                    <p className={`${fontSize} `}>{story}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-tr from-purple-400/50 via-blue-300 to-red-400/50">
              <div className="p-8 rounded-lg flex items-center justify-center">
                <p className={`${fontSize}`}>The End</p>
              </div>
            </div>
          </HTMLFlipBook>
        </div>
      </article>
    </section>
  );
}

type ButtonProps = {
  children: string;
  setFontSize: (size: FontSize) => void;
  size: FontSize;
  currentFontSize: FontSize;
};
function Button({ children, setFontSize, size, currentFontSize }: ButtonProps) {
  const handleFontSize = (size: FontSize) => {
    setFontSize(size);
  };

  const isActive = size === currentFontSize;

  return (
    <button
      onClick={() => handleFontSize(size)}
      className={`p-1 border border-slate-300  ${
        isActive ? "text-white bg-black" : "bg-white"
      }`}
    >
      {children}
    </button>
  );
}
