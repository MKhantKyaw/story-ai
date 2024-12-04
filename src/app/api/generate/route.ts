import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

type Input = {
  character: string;
  place: string;
  goal: string;
  challenges: string;
  genre: string;
  name: string;
};

export async function POST(request: NextRequest) {
  try {
    const { character, place, goal, challenges, genre, name }: Input =
      await request.json();
    if (!character || !place || !goal || !challenges || !genre || !name) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Generate story with updated model
    const storyResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Update to a supported model
      messages: [
        {
          role: "user",
          content: `Write a short 100-word children's story based on the following: 
          Title: [Insert a fun title based on the genre]. without using **.
          Character: ${character}
          Name: ${name},
          Place: ${place}
          Character Goal: ${goal}
          Conflict/Challenge: ${challenges}
          Genre: ${genre}
          Make the story engaging and appropriate for children.`,
        },
      ],
      max_tokens: 100,
    });
    const storyContent =
      storyResponse.choices[0].message?.content?.trim() || "";

    // Assuming the response format is "<title>\n\n<story>"
    const [titleLine, ...storyLines] = storyContent.split("\n");
    const title = titleLine.replace("Title: ", "").trim();
    const story = storyLines.join("\n").trim();

    // Generate image using DALL-E 2
    // const imageResponse = await openai.images.generate({
    //   prompt: `An illustration for a children's story titled "${title}" featuring ${character} in ${place}`,
    //   n: 1,
    //   size: "256x256",
    // });
    // const imageUrl = imageResponse.data[0].url;
    const imageUrl =
      "https://oaidalleapiprodscus.blob.core.windows.net/private/org-oztsODLCN4wofY4imctfnFIZ/user-A46aW81lKuPWZiIM39z8q8uJ/img-991hD6LdeQ0jfqXyXtGNBq2A.png?st=2024-12-04T14%3A33%3A41Z&se=2024-12-04T16%3A33%3A41Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-04T00%3A10%3A46Z&ske=2024-12-05T00%3A10%3A46Z&sks=b&skv=2024-08-04&sig=vvYl9vBLbjrqbe8Sv1d5PIs4L74bo/mKYkXivwxfheY%3D";

    return NextResponse.json({ title, story, imageUrl });
  } catch (error) {
    console.error("Error generating content:", error);
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { error: "Failed to generate content", details: errorMessage },
      { status: 500 }
    );
  }
}

//dummy data without openai api
// type Input = {
//   character: string;
//   place: string;
// };
// export async function POST(request: NextRequest) {
//   const { character, place }: Input = await request.json();

//   if (!character || !place) {
//     return NextResponse.json({ error: "Input is required" }, { status: 400 });
//   }

//   const title = `The ${character} of ${place}`;
//   const story = `Once upon a time, there was a brave hero named ${character}, living in ${place} They embarked on an adventure that changed their life forever. They fought dragons, made new friends, and found a treasure beyond imagination. The end.`;
//   const imageUrl =
//     "https://oaidalleapiprodscus.blob.core.windows.net/private/org-oztsODLCN4wofY4imctfnFIZ/user-A46aW81lKuPWZiIM39z8q8uJ/img-X4pVs7wALXXF7FoE46K00yoc.png?st=2024-12-03T22%3A10%3A17Z&se=2024-12-04T00%3A10%3A17Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-03T00%3A15%3A12Z&ske=2024-12-04T00%3A15%3A12Z&sks=b&skv=2024-08-04&sig=AViiDb7NlSYx/zWGh1PHWFwiT0O3KQ6wj2QcbbsYma0%3D";
//   return NextResponse.json({ story, title, imageUrl });
// }
