"use client";

import { ProjectSkeleton } from "@/lib/type";
import { EntryCollection } from "contentful";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Carousel = ({
  images,
}: {
  images: EntryCollection<ProjectSkeleton>;
}) => {
  const [imgSelected, setImgSelected] = useState(0);
  return (
    <div className="relative">
      <div className="h-[180px] sm:h-[400px] mt-10 flex items-center justify-center">
        {images.items.map((item, idx) => {
          const imgUrl = item.fields.images.length
            ? // @ts-ignore
              `https:${item.fields.images[0].fields.file.url}`
            : "";
          return (
            <div
              key={idx}
              className={`${
                imgSelected === idx
                  ? "transition-opacity opacity-100"
                  : "opacity-0"
              } absolute z-0 duration-300`}
            >
              <Image
                alt=""
                src={imgUrl}
                width={700}
                height={400}
                className="max-w-[315px] max-h-[180px] sm:max-w-[560px]  sm:max-h-[320px] lg:max-w-[700px] lg:max-h-[400px] object-cover"
              />
              <p
                className={`${
                  imgSelected === idx
                    ? "transition-all"
                    : "translate-y-10"
                } text-white absolute top-1/2 -translate-y-1/2 text-base sm:text-2xl font-bold pl-10 py-2 bg-opacity-50 bg-black w-full duration-700`}
              >
                {item.fields.name as unknown as string}
              </p>
            </div>
          );
        })}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 lg:px-20 xl:px-52 w-full">
        <Button
          size="icon"
          onClick={() => setImgSelected(imgSelected > 0 ? imgSelected - 1 : 3)}
        >
          <ChevronLeft />
        </Button>
        <Button
          size="icon"
          className="float-right"
          onClick={() => setImgSelected(imgSelected > 2 ? 0 : imgSelected + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
