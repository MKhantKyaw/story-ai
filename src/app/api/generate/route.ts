import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!,
// });

// type Input = {
//   character: string;
//   place: string;
// };

// export async function POST(request: NextRequest) {
//   try {
//     const { character, place }: Input = await request.json();
//     if (!character || !place) {
//       return NextResponse.json(
//         { error: "Prompt is required" },
//         { status: 400 }
//       );
//     }

//     // Generate story with updated model
//     const storyResponse = await openai.chat.completions.create({
//       model: "gpt-4o-mini", // Update to a supported model
//       messages: [
//         {
//           role: "user",
//           content: `Write a short 100 words children's story based on this character ${character} and place ${place}. Provide a title for the story as well. Don't include ** in the title.`,
//         },
//       ],
//       max_tokens: 200,
//     });
//     const storyContent =
//       storyResponse.choices[0].message?.content?.trim() || "";

//     // Assuming the response format is "**Title: <title>**\n\n<story>"
//     const [titleLine, ...storyLines] = storyContent.split("\n");
//     const title = titleLine;
//     const story = storyLines.join("\n").trim();

//     // Generate image using DALL-E 2
//     // const imageResponse = await openai.images.generate({
//     //   prompt: `An illustration for a children's story titled "${title}" featuring ${character} in ${place}`,
//     //   n: 1,
//     //   size: "256x256",
//     // });
//     // const imageUrl = imageResponse.data[0].url;

//     return NextResponse.json({ title, story });
//   } catch (error) {
//     console.error("Error generating content:", error);
//     const errorMessage = (error as Error).message;
//     return NextResponse.json(
//       { error: "Failed to generate content", details: errorMessage },
//       { status: 500 }
//     );
//   }
// }

type Input = {
  character: string;
  place: string;
};
export async function POST(request: NextRequest) {
  const { character, place }: Input = await request.json();

  if (!character || !place) {
    return NextResponse.json({ error: "Input is required" }, { status: 400 });
  }

  const title = `The ${character} of ${place}`;
  const story = `Once upon a time, there was a brave hero named ${character}, living in ${place} They embarked on an adventure that changed their life forever. They fought dragons, made new friends, and found a treasure beyond imagination. The end.`;
  const imageUrl =
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-oztsODLCN4wofY4imctfnFIZ/user-A46aW81lKuPWZiIM39z8q8uJ/img-X4pVs7wALXXF7FoE46K00yoc.png?st=2024-12-03T22%3A10%3A17Z&se=2024-12-04T00%3A10%3A17Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-03T00%3A15%3A12Z&ske=2024-12-04T00%3A15%3A12Z&sks=b&skv=2024-08-04&sig=AViiDb7NlSYx/zWGh1PHWFwiT0O3KQ6wj2QcbbsYma0%3D";
  return NextResponse.json({ story, title, imageUrl });
}