import { EntryFieldTypes } from "contentful";

export type ProjectSkeleton = {
  contentTypeId: "projects";
  fields: {
    owner: string;
    name: string;
    acreage: string;
    style: string;
    images: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ImageSkeleton>>;
  };
};

export type ImageSkeleton = {
  contentTypeId: "images";
  fields: {
    file: {
      url: string;
      filename: string;
      contentType: string;
      detail: any;
    };
  };
};

export type TestimonialSkeleton = {
  contentTypeId: "testimonials";
  fields: {
    client: string;
    job: string;
    content: EntryFieldTypes.RichText;
    avatar: EntryFieldTypes.EntryLink<ImageSkeleton>;
  };
};

export type BlogSkeleton = {
  contentTypeId: "blog";
  fields: {
    name: string;
    banner: EntryFieldTypes.EntryLink<ImageSkeleton>;
    content: EntryFieldTypes.RichText;
  };
};
