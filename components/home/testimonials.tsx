import { contentfulClient } from "@/lib/api";
import { TestimonialSkeleton } from "@/lib/type";
import { TestimonialCarousel } from "./testimonial-carousel";

async function getData() {
  const result = await contentfulClient().getEntries<TestimonialSkeleton>({
    content_type: "testimonials",
    limit: 3,
  });
  return result;
}

export const Testimonials = async () => {
  const result = await getData();
  return (
    <div className="mt-20">
      <h3 className="font-bold text-2xl lg:text-3xl lg:w-1/2 lg:float-right lg:pl-5 lg:mt-16 text-center lg:text-left">
        Our Customer Say
      </h3>
      <div>
        <TestimonialCarousel testimonials={result} />
      </div>
    </div>
  );
};
