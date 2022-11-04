import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useGetFeeds } from "hooks/rss/useGetFeeds";
import RssPage from "@components/Rss";

const Rss: NextPage = () => {
  return <RssPage />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["feeds"], useGetFeeds);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    // ISR 방식으로 3시간마다 업데이트
    revalidate: 60 * 60 * 3,
  };
};
export default Rss;
