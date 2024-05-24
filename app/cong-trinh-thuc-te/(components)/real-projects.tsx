"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EntryCollection } from "contentful";
import { ProjectSkeleton } from "@/lib/type";
import Image from "next/image";

export const RealProjects = ({
  projects,
}: {
  projects: EntryCollection<ProjectSkeleton>;
}) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <>
      <div className="w-max mx-auto my-10 space-x-0 sm:space-x-5">
        <Link href="/thietke3d">
          <Button
            variant="ghost"
            size="sm"
            className={`${
              query === null ? "text-white bg-black" : ""
            } hover:text-white hover:bg-black`}
          >
            Tất cả
          </Button>
        </Link>
        <Link href="/thietke3d?q=nha-pho">
          <Button
            variant="ghost"
            size="sm"
            className={`${
              query === "nha-pho" ? "text-white bg-black" : ""
            } hover:text-white hover:bg-black`}
          >
            Nhà phố
          </Button>
        </Link>
        <Link href="/thietke3d?q=biet-thu">
          <Button
            variant="ghost"
            size="sm"
            className={`${
              query === "biet-thu" ? "text-white bg-black" : ""
            } hover:text-white hover:bg-black`}
          >
            Biệt thự
          </Button>
        </Link>
        <Link href="/thietke3d?q=chung-cu">
          <Button
            variant="ghost"
            size="sm"
            className={`${
              query === "chung-cu" ? "text-white bg-black" : ""
            } hover:text-white hover:bg-black`}
          >
            Chung cư
          </Button>
        </Link>
        <Link href="/thietke3d?q=khac">
          <Button
            variant="ghost"
            size="sm"
            className={`${
              query === "khac" ? "text-white bg-black" : ""
            } hover:text-white hover:bg-black`}
          >
            Khác
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.items.map((project, idx) => {
          const imgUrl = project.fields.images.length
            ? // @ts-ignore
              `https:${project.fields.images[0].fields.file.url}`
            : "";
          return (
            <div
              key={idx}
              className="relative overflow-hidden hover:cursor-pointer w-max mx-auto"
            >
              <Image
                alt=""
                src={imgUrl}
                width={700}
                height={400}
                className="max-w-[315px] max-h-[180px] sm:max-w-[350px] sm:max-h-[200px] lg:max-w-[450px] lg:max-h-[280px] object-cover"
              />
              <p
                className={`text-white absolute top-1/2 -translate-y-1/2 text-base sm:text-2xl font-bold pl-10 py-2 bg-opacity-50 bg-black w-full`}
              >
                {project.fields.name as unknown as string}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
