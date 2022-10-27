import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { FeedDataType } from "../../hooks/rss/useGetFeeds";
import FeedCard from "./FeedCard";
import GoogleSearchSuggests from "../Google";

const RssPage = () => {
  const cache = useQueryClient();
  const feedData = cache.getQueryData(["feeds"]) as FeedDataType[];

  return (
    <RssWrapper>
      <GoogleSearchSuggests></GoogleSearchSuggests>
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
  padding: 50px 10px;

  a {
    all: unset;
  }
`;
