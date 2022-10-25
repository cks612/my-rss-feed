import Parser, { Output } from "rss-parser";
import { RSS_BLOG_LIST } from "../../constants/blog/BlogList";
import { isFulfilled } from "../../types/utils";
import { formatFeeds } from "../../utils/rss/formatFeeds";

export type FeedDataType = AdditionalDataType &
  Output<{
    [key: string]: any;
  }>;
export type Item = FeedDataType["items"][number];

interface AdditionalDataType {
  isoDate: string;
  "content:encoded"?: string;
  "content:encodedSnippet"?: string;
  author?: string;
  categories?: string[];
  guid: string;
  image: Image;
  thumbnailImage: string;
}

interface Image {
  link: string;
  url: string;
  title: string;
}

export const useGetFeeds = async () => {
  // parser에 제네릭으로 추가적으로 들어갈 타입 정하기
  let parser = new Parser<AdditionalDataType>({
    headers: {
      Accept: "application/rss+xml, application/xml, application/atom+xml",
    },
  });

  const blog = RSS_BLOG_LIST.map(blog => blog.url);
  const result = [];

  const getFeeds = await Promise.allSettled(
    blog.map(url => parser.parseURL(url))
  );
  result.push(...getFeeds.filter(isFulfilled).slice(0, 100));

  return formatFeeds(result.map(feed => feed.value)).slice(0, 100);
};
