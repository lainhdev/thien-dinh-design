import { contentfulClient } from "@/lib/api";

async function getData() {
  const result = await contentfulClient().getEntries({
    content_type: "blog",
  });
  return result;
}
export default async function Blogs() {
  const result = await getData();
  console.log(result.items[0].fields);
  return (
    <div>
      <h3 className="text-4xl text-center font-bold mb-10 mt-20">Blogs</h3>
      <div></div>
    </div>
  );
}
