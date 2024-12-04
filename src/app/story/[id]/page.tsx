import StoryDisplay from "@/components/display-story";
import { getStory } from "@/lib/actions";

type Props = {
  params: {
    id: string;
  };
};

export default async function StoryPage({ params }: Props) {
  const { id } = await params;
  const story = await getStory(id);
  return (
    <main className="p-12 text-justify">
      <StoryDisplay story={story} />
    </main>
  );
}
