import { contentfulClient } from "@/lib/api";
import { Carousel } from "./gallery-carousel";
import { ProjectSkeleton } from "@/lib/type";

async function getData() {
  const result = await contentfulClient().getEntries<ProjectSkeleton>({
    content_type: "projects",
    limit: 4,
  });
  return result;
}

export const ProjectsGallery = async () => {
  const result = await getData();

  return (
    <div className="mt-20 bg-black py-10 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
        Công Trình Thực Tế
      </h2>
      <div>
        <Carousel images={result} />
      </div>
    </div>
  );
};
