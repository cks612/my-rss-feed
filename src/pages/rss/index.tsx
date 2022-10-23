import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { NextPage } from "next";
import React from "react";
import RssPage from "../../components/Rss";
import { useGetFeeds } from "../../hooks/useFetchHooks";

const Rss: NextPage = () => {
  return <RssPage />;
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["feeds"], useGetFeeds);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default Rss;
