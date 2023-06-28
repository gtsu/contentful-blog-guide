import { IBlogEntryFields } from "@/ContentfulGeneratedTypes";
import BlogEntry, { BlogEntryProps } from "@/components/BlogEntry";
import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next/types";

const BlogEntryPage = ({ entry }: BlogEntryProps) => {
  return <BlogEntry entry={entry} />;
};

export default BlogEntryPage;

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<BlogEntryProps> = async ({
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
