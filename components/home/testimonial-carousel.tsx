"use client";

import { TestimonialSkeleton } from "@/lib/type";
import { EntryCollection } from "contentful";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const TestimonialCarousel = ({
  testimonials,
}: {
  testimonials: EntryCollection<TestimonialSkeleton>;
}) => {
  const [imgSelected, setImgSelected] = useState(0);
  return (
    <div className="relative">
      <div className="h-[700px] md:h-[650px] lg:h-[410px] xl:h-[650px] mt-5">
        {testimonials.items.map((item, idx) => {
          const imgUrl = item.fields.avatar
            ? // @ts-ignore
              `https:${item.fields.avatar.fields.file.url}`
            : "";
          const { content } = item.fields;
          return (
            <div
              key={idx}
              className={`${
                imgSelected === idx
                  ? "transition-opacity opacity-100"
                  : "opacity-0"
              } absolute z-0 duration-300 w-full`}
            >
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around">
                <div className="lg:w-1/2 mx-auto">
                  <Image
                    alt=""
                    src={imgUrl}
                    width={600}
                    height={600}
                    className="max-w-[350px] max-h-[350px] lg:max-w-[400px] lg:max-h-[400px] xl:max-w-[600px] xl:max-h-[600px] object-cover mx-auto"
                  />
                </div>
                <div className="lg:w-1/2 lg:pl-5 mt-5 px-5 lg:px-0 lg:mt-0">
                  <div className="max-w-md mx-auto lg:mx-0 lg:h-[350px] lg:flex lg:justify-end lg:flex-col">
                    <div
                      dangerouslySetInnerHTML={{
                        // @ts-ignore
                        __html: documentToHtmlString(content),
                      }}
                      className="leading-relaxed"
                    ></div>
                    <h6 className="mt-5 font-bold text-xl">
                      {item.fields.client as unknown as string}
                    </h6>
                    <p>{item.fields.job as unknown as string}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-max mb-10">
        <Button
          size="icon"
          onClick={() => setImgSelected(imgSelected > 0 ? imgSelected - 1 : 2)}
          className="mr-5"
        >
          <ChevronLeft />
        </Button>
        <Button
          size="icon"
          className="lg:float-right"
          onClick={() => setImgSelected(imgSelected > 1 ? 0 : imgSelected + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
