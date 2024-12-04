import StoryDisplay from "@/components/display-story";
import { getStory } from "@/lib/actions";

type PageProps = {
  //Remark for myself: I have to use Promise<> to get the params from Next 15
  params: Promise<{
    id: string;
  }>;
};

export default async function StoryPage({ params }: PageProps) {
  const { id } = await params;
  const story = await getStory(id);
  return (
    <main className="p-12 text-justify">
      <StoryDisplay story={story} />
    </main>
  );
}
