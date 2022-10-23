import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const RssPage = () => {
  const cache = useQueryClient();
  const feedData = (cache.getQueryData(["feeds"]) as []) || [];
  console.log(feedData);
  return <div />;
};

export default RssPage;
