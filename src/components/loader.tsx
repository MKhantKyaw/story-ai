import React from "react";
import { useFormStatus } from "react-dom";

export default function Loader() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending && (
        <div className="z-1 absolute inset-0 flex flex-col gap-5 items-center justify-center w-full h-[calc(100vh+50px)]  bg-white">
          <l-grid size="60" speed="1.5" color="purple"></l-grid>
          <p>loading</p>
        </div>
      )}
    </>
  );
}
