import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { FeedDataType } from "../../hooks/rss/useGetFeeds";
import FeedCard from "./FeedCard";

const RssPage = () => {
  const cache = useQueryClient();
  const feedData = cache.getQueryData(["feeds"]) as FeedDataType[];

  return (
    <RssWrapper>
      {feedData.map(feed => (
        <FeedCard key={feed.guid} feedData={feed} />
      ))}
    </RssWrapper>
  );
};

export default RssPage;

const RssWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px 10px;

  a {
    all: unset;
  }
`;
