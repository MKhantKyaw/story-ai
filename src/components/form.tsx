"use client";

import { generateStory } from "@/lib/actions";
import React from "react";
import Button from "./button";
import Loader from "./loader";

export default function Form() {
  return (
    <form
      action={generateStory}
      className="flex flex-col gap-4 max-w-[650px] bg-white shadow-md rounded-md p-4 lg:p-8 w-full"
    >
      <div className="flex flex-col p-1">
        <Label htmlFor="character">Character</Label>
        <Input type="text" name="character" id="character" />
      </div>
      <div className="flex flex-col p-1">
        <Label htmlFor="place">Place</Label>
        <Input type="text" name="place" id="place" />
      </div>
      <Button />
      <Loader />
    </form>
  );
}

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
      style={{
        borderImage:
          "linear-gradient(to right, rgb(192 132 252/.8), rgb(248 113 113/.8)) 1",
        borderWidth: "2px",
        opacity: 0.7,
        transition: "opacity 0.3s ease-in-out",
      }}
      onFocus={(e) => (
        (e.target.style.opacity = "1"), (e.target.style.borderWidth = "3px")
      )}
      onBlur={(e) => (
        (e.target.style.opacity = "0.7"), (e.target.style.borderWidth = "2px")
      )}
      required
    />
  );
}

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-slate-700">
      {children}
    </label>
  );
}
