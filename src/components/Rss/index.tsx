import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import usePagination from "hooks/pagination/usePagination";
import * as S from "@styles/components/_rssStyles";
import Feed from "./Feed";
import dynamic from "next/dynamic";
import GoogleSearchSuggests from "@components/Google";
import { FeedDataType } from "types/rss/rssTypes";

const Pagination = dynamic(() => import("@components/Pagination"), {
  ssr: false,
});

const RssPage = () => {
  const cache = useQueryClient();
  const feedData = cache.getQueryData(["feeds"]) as FeedDataType[];

  const { feeds, page, setPage } = usePagination({
    data: feedData,
  });

  return (
    <S.RssWrapper>
      <GoogleSearchSuggests />
      <Feed feeds={feeds} />

      <Pagination totalLength={feedData.length} page={page} setPage={setPage} />
    </S.RssWrapper>
  );
};

export default RssPage;
