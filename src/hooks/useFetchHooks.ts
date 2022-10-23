import Parser from "rss-parser";
import { RSS_BLOG_LIST } from "../constants/BlogList";

interface DataType {
  status: string;
  value: valueDataType;
}
interface valueDataType {
  items: AdditionalDataType[];
  title: string;
  description: string;
  pubData: string;
  managingEditor: string;
  generator: string;
  link: string;
  language: string;
  ttl: string;
}
interface AdditionalDataType {
  isoDate: string;
  "content:encoded"?: string;
  "content:encodedSnippet"?: string;
  author?: string;
  categories?: string[];
  blogTitle: string;
  image: Image;
  thumbnailImage: string;
}

interface Image {
  link: string;
  url: string;
  title: string;
}

export const useGetFeeds = async () => {
  let parser = new Parser();
  const blog = RSS_BLOG_LIST.map(blog => blog.url);

  const result = [];

  const getFeeds = await Promise.allSettled(
    blog.map(url => parser.parseURL(url))
  );
  result.push(
    ...getFeeds.filter(data => data.status === "fulfilled").slice(0, 100)
  );

  // for await (const url of blog) {
  //   parser.parseURL(url);
  // }

  return result;
};
