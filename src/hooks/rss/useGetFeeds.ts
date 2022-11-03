import Parser from "rss-parser";
import { RSS_BLOG_LIST } from "constants/blog/BlogList";
import { isFulfilled } from "types/utils";
import { formatFeeds } from "utils/rss/formatFeeds";
import { AdditionalDataType } from "types/rss/rssTypes";

// const { JSDOM } = require("jsdom");

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
  // let a: any = getFeeds
  //   .filter(isFulfilled)
  //   .filter(
  //     data => data?.value?.feedUrl === "https://kofearticle.substack.com/feed"
  //   )
  //   .map(res => res.value.items.map(ls => ls.content));
  // console.log(a[0]);
  // let pp = [];
  // for (let i = 0; a[0][i].length; i++) {
  //   let bb = [];
  //   bb.push(a[0][i]);
  //   if (bb.length === 5) {
  //     pp.push(bb);
  //   }
  // }
  // console.log(a.length);
  // console.log(pp);

  // let lp = a[0][0];
  // let newData = new JSDOM(lp);
  // console.log("=========================");
  // console.log();
  // console.log("=========================");

  // console.log(newData);
  result.push(...getFeeds.filter(isFulfilled).slice(0, 100));

  return formatFeeds(result.map(feed => feed.value)).slice(0, 100);
};
