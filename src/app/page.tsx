// "use client";
// import { useState } from "react";

// type FormDataType = {
//   character: string;
//   place: string;
// };
// export default function Home() {
//   const [formData, setFormData] = useState<FormDataType>({
//     character: "",
//     place: "",
//   });
//   const [story, setStory] = useState<string>("");
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const response = await fetch("/api/generate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         character: formData.character,
//         place: formData.place,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     setStory(data.story);
//   };

//   return (
//     <div>
//       <h1>Short Story Generator</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={formData.character}
//           onChange={handleInputChange}
//           name="character"
//           placeholder="Enter a theme or character name"
//         />
//         <input
//           type="text"
//           value={formData.place}
//           onChange={handleInputChange}
//           name="place"
//           placeholder="Enter a place"
//         />
//         <button type="submit">Generate Story</button>
//       </form>
//       {story && <p>{story}</p>}
//     </div>
//   );
// }
"use client";

import Blob from "@/components/blob";
import Form from "@/components/form";

export default function Home() {
  return (
    <main className="lg:flex lg:items-center lg:justify-center px-4 lg:px-8">
      <div className="flex flex-col items-center lg:flex-grow p-2 lg:p-8">
        <h1 className="text-4xl font-semibold mt-8 lg:mt-0 mb-8">
          Short Story Generator
        </h1>
        <Form />
      </div>
      <div>
        <Blob />
      </div>
    </main>
  );
}
