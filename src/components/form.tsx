"use client";

import { generateStory } from "@/lib/actions";
import React from "react";
import Button from "./button";
import Loader from "./loader";
import DropDown from "./dropdown";

const characterValues: string[] = [
  "Boy",
  "Girl",
  "Dog",
  "Cat",
  "Lion",
  "Unicorn",
];

const genreValues: string[] = [
  "Adventure",
  "Fantasy",
  "Mystery",
  "Science Fiction",
  "Romance",
];

export default function Form() {
  return (
    <form
      action={generateStory}
      className="flex flex-col gap-4 max-w-[650px] bg-white shadow-md rounded-md p-4 lg:p-8 w-full"
    >
      <div className="flex items-center gap-4">
        <div className="flex flex-col p-1 flex-1 min-w[100px]">
          <Label htmlFor="character">Character</Label>
          <DropDown
            name="character"
            id="character"
            values={characterValues}
            styles={inputStyles}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
        </div>
        <div className="flex flex-col p-1 flex-1 min-w-[100px]">
          <Label htmlFor="name">Character Name</Label>
          <Input type="text" name="name" id="name" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col p-1 flex-1 min-w-[100px]">
          <Label htmlFor="genre">Genre</Label>
          <DropDown
            name="genre"
            id="genre"
            values={genreValues}
            styles={inputStyles}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
        </div>
        <div className="flex flex-col p-1 flex-1 min-w-[100px] w-full">
          <Label htmlFor="place">Place</Label>
          <Input type="text" name="place" id="place" />
        </div>
      </div>

      <div className="flex flex-col p-1 flex-1">
        <Label htmlFor="goal">Goal</Label>
        {/* textarea for character goal */}
        <textarea
          name="goal"
          id="goal"
          className="p-2 border border-transparent outline-none bg-white h-24"
          style={inputStyles}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="To save the world from an alien invasion..."
          cols={40}
          required
        />
      </div>

      {/* textarea for character challenges */}
      <div className="flex flex-col p-1 flex-1">
        <Label htmlFor="challenges">Challenges</Label>
        <textarea
          name="challenges"
          id="challenges"
          className="p-2 border border-transparent outline-none bg-white h-24"
          style={inputStyles}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="The character faces many challenges..."
          cols={40}
          required
        />
      </div>

      <Button />
      <Loader />
    </form>
  );
}

//reusable styles for input fields
const inputStyles = {
  borderImage:
    "linear-gradient(to right, rgb(192 132 252/.8), rgb(248 113 113/.8)) 1",
  borderWidth: "2px",
  opacity: 0.7,
  transition: "opacity 0.3s ease-in-out",
};
const handleFocus = (
  e: React.FocusEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  e.target.style.opacity = "1";
  e.target.style.borderWidth = "3px";
};
const handleBlur = (
  e: React.FocusEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  e.target.style.opacity = "0.7";
  e.target.style.borderWidth = "2px";
};

type InputProps = {
  type: string;
  name: string;
  id: string;
};

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};

function Input({ type, name, id }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="p-2 border border-transparent outline-none bg-white"
      style={inputStyles}
      onFocus={handleFocus}
      onBlur={handleBlur}
      required
    />
  );
}

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-slate-500">
      {children}
    </label>
  );
}
