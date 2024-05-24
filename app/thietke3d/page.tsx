import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { DesignProjects } from "./(components)/design-projects";
import { contentfulClient } from "@/lib/api";
import { ProjectSkeleton } from "@/lib/type";

async function getData() {
  const result = await contentfulClient().getEntries<ProjectSkeleton>({
    content_type: "projects",
  });
  return result;
}

export default async function page() {
  const result = await getData();
  return (
    <div className="mb-10">
      <div className="bg-black text-white pl-10 lg:pl-28 py-10">
        <h1 className="font-bold text-3xl lg:text-4xl">Công trình thiết kế</h1>
        <div className="flex flex-row mt-3">
          <Link href="/" className="underline">
            Trang chủ 
          </Link>{" "}
          <ChevronsRight />
          <span>Công trình thiết kế</span>
        </div>
      </div>
      <DesignProjects projects={result} />
    </div>
  );
}
