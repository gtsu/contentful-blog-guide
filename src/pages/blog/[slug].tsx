import { IBlogEntryFields } from "@/ContentfulGeneratedTypes";
import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next/types";

type BlogEntryPageProps = {
  entry: IBlogEntryFields;
};

const BlogEntryPage = ({ entry }: BlogEntryPageProps) => {
  return (
    <div className="flex flex-col gap-3 mt-6">
      <h1 className="text-4xl border-b-2">{entry.title}</h1>
      <p className="px-2">{entry.post}</p>
    </div>
  );
};

export default BlogEntryPage;

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<BlogEntryPageProps> = async ({
  params,
}) => {
  const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN || "",
    environment: process.env.CONTENTFUL_ENVIRONMENT || "",
  });

  const blogEntries = await contentful.getEntries<IBlogEntryFields>({
    content_type: "blogEntry",
    "fields.slug": params?.slug || "",
    include: 3,
  });

  if (!blogEntries.items.length) {
    return { notFound: true };
  }

  return {
    props: {
      entry: blogEntries.items[0].fields,
    },
  };
};
