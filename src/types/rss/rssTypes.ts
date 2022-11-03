import { Dispatch, SetStateAction } from "react";
import { Output } from "rss-parser";

export type FeedDataType = AdditionalDataType &
  Output<{
    [key: string]: any;
  }>;
export type Item = FeedDataType["items"][number];

export interface AdditionalDataType {
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

export interface paginateProps {
  totalLength: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
