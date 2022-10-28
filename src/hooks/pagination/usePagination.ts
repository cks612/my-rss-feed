import { useState } from "react";
import { FeedDataType } from "../rss/useGetFeeds";

export const LIMIT_PAGE_NUMBER = 10;

const usePagination = ({ data }: { data: FeedDataType[] }) => {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * LIMIT_PAGE_NUMBER;

  const paginatedData = data.slice(offset, offset + LIMIT_PAGE_NUMBER);

  return { feeds: paginatedData, page, setPage };
};

export default usePagination;
