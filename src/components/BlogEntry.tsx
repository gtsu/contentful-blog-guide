import { IBlogEntryFields } from "@/ContentfulGeneratedTypes";

export type BlogEntryProps = {
  entry: IBlogEntryFields;
};

const BlogEntry = ({ entry }: BlogEntryProps) => (
  <div className="flex flex-col gap-3 mt-6">
    <h1 className="text-4xl border-b-2">{entry.title}</h1>
    <p className="px-2">{entry.post}</p>
  </div>
);

export default BlogEntry;
