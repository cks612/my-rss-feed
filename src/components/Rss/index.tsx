import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const RssPage = () => {
  const cache = useQueryClient();
  const feedData = (cache.getQueryData(["feeds"]) as []) || [];
  // const a = feedData.flatMap(feed => feed.value);
  // console.log(c.map(d => d.isoDate).sort((a:any, b:any) => new Date(a.isoDate) - new Date(b.isoDate))));
  console.log(feedData);
  // .sort((a:any, b:any) => new Date(a.isoDate) - new Date(b.isoDate)))

  const getThumbnailImage = () => {
    // const jsDom = new JSDOM(data.content);
    // console.log(data);
  };

  return <div />;
};

export default RssPage;
