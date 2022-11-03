import { FILTER_REGEX } from "constants/utils/FilterRegEx";
import { FeedDataType, Item } from "types/rss/rssTypes";

const { JSDOM } = require("jsdom");

export const formatFeeds = (feeds: FeedDataType[]) => {
  return (
    feeds
      .flatMap(feed =>
        feed.items
          .filter(item => item.title !== "No title")
          .map(data => {
            return {
              ...data,
              content: filterProcess(data.content ?? ""),
              contentSnippet: filterProcess(data.contentSnippet ?? ""),
              "content:encoded": filterProcess(data["content:encoded"] ?? ""),
              "content:encodedSnippet": filterProcess(
                data["content:encodedSnippet"] ?? ""
              ),
              image: feed.image ?? {
                link: "",
                url: "",
                title: "",
              },
              thumbnailImage: getThumbnailImage(data),
            };
          })
      )
      // !뒤에 붙이면 null 혹은 undefined를 타입에서 제외하겠다라는 뜻
      .sort((a, b): number => +new Date(b.isoDate!) - +new Date(a.isoDate!))
    // index 값이 100보다 작은 애들로 필터링
    // .filter((_, i) => i < 100)
  );
};

const filterProcess = (item: string) => {
  return item.replaceAll(FILTER_REGEX, "").substring(0, 300);
};

const getThumbnailImage = (data: Item) => {
  const jsDom = new JSDOM(data.content ?? data.contentSnippet);
  let imageUrl =
    jsDom.window.document.querySelector("img")?.getAttribute("src") ?? "";

  const isRelativeUrl = imageUrl && data.link && !imageUrl.includes("http");
  if (isRelativeUrl) {
    try {
      const url = new URL(data.link ?? "");
      imageUrl = url.origin + imageUrl;
    } catch (error) {
      console.log(error);
    }
  }
  return imageUrl;
};
